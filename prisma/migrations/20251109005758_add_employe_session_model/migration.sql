-- CreateTable
CREATE TABLE "employee_sessions" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "token" VARCHAR(255) NOT NULL,

    CONSTRAINT "employee_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_sessions_employee_id_key" ON "employee_sessions"("employee_id");

-- AddForeignKey
ALTER TABLE "employee_sessions" ADD CONSTRAINT "employee_sessions_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
