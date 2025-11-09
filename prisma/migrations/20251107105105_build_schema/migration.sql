-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('owner', 'employee');

-- CreateEnum
CREATE TYPE "ITEM_UNIT" AS ENUM ('Kg', 'pcs');

-- CreateEnum
CREATE TYPE "ORDER_STATUS" AS ENUM ('on the way to pick up', 'on the way to deliver', 'accepted', 'in progress', 'done');

-- CreateEnum
CREATE TYPE "ORDER_TYPE" AS ENUM ('delivery', 'regular');

-- CreateEnum
CREATE TYPE "DISCOUNT_TYPE" AS ENUM ('value', 'percentage');

-- CreateEnum
CREATE TYPE "PAYMENT_METHOD" AS ENUM ('CASH', 'QRIS');

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "address" TEXT,
    "information" TEXT,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "role" "ROLE" NOT NULL DEFAULT 'employee',
    "start_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_history" (
    "employee_id" INTEGER NOT NULL,
    "join_date" TIMESTAMP(6) NOT NULL,
    "resign_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_history_pkey" PRIMARY KEY ("employee_id","join_date")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "completion_time_in_hours" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "unit" "ITEM_UNIT" NOT NULL,
    "descriptions" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "notes" TEXT,
    "status" "ORDER_STATUS",
    "type" "ORDER_TYPE",
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_detail" (
    "order_id" INTEGER NOT NULL,
    "pickup_location_id" INTEGER NOT NULL,
    "deliver_location_id" INTEGER NOT NULL,

    CONSTRAINT "order_detail_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "order_pickups" (
    "order_id" INTEGER NOT NULL,
    "driver_id" INTEGER NOT NULL,
    "pickup_time" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "order_pickups_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "order_deliveries" (
    "order_id" INTEGER NOT NULL,
    "driver_id" INTEGER NOT NULL,
    "arrival_time" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "order_deliveries_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION,
    "notes" TEXT,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discounts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "value" INTEGER,
    "type" "DISCOUNT_TYPE" NOT NULL,
    "start_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_discounts" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "discount_id" INTEGER NOT NULL,
    "limit_usage" INTEGER NOT NULL,
    "time_used" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "customer_discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_sessions" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "token" VARCHAR(255),

    CONSTRAINT "customer_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "entry_date" TIMESTAMP(6) NOT NULL,
    "completion_date" TIMESTAMP(6) NOT NULL,
    "grand_total" INTEGER NOT NULL,
    "payment" "PAYMENT_METHOD",
    "is_paid" BOOLEAN,
    "paid_at" TIMESTAMP(6),

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applied_discount" (
    "invoice_id" INTEGER NOT NULL,
    "customer_discount_id" INTEGER NOT NULL,

    CONSTRAINT "applied_discount_pkey" PRIMARY KEY ("invoice_id","customer_discount_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "services_name_key" ON "services"("name");

-- CreateIndex
CREATE UNIQUE INDEX "constraint_unique_customer_discount" ON "customer_discounts"("customer_id", "discount_id");

-- CreateIndex
CREATE UNIQUE INDEX "customer_sessions_customer_id_key" ON "customer_sessions"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoices_order_id_key" ON "invoices"("order_id");

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_history" ADD CONSTRAINT "employee_history_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_pickup_location_id_fkey" FOREIGN KEY ("pickup_location_id") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_deliver_location_id_fkey" FOREIGN KEY ("deliver_location_id") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_pickups" ADD CONSTRAINT "order_pickups_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_deliveries" ADD CONSTRAINT "order_deliveries_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_discounts" ADD CONSTRAINT "customer_discounts_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_discounts" ADD CONSTRAINT "customer_discounts_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_sessions" ADD CONSTRAINT "customer_sessions_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applied_discount" ADD CONSTRAINT "applied_discount_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applied_discount" ADD CONSTRAINT "applied_discount_customer_discount_id_fkey" FOREIGN KEY ("customer_discount_id") REFERENCES "customer_discounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
