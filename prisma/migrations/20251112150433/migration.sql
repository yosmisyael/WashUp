-- AddForeignKey
ALTER TABLE "order_pickups" ADD CONSTRAINT "order_pickups_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_deliveries" ADD CONSTRAINT "order_deliveries_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
