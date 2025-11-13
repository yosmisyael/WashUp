import { OrderProvider } from './order-context';
import {getAllServices} from "@/lib/services-repository";

export default async function NewOrderLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const servicesData = await getAllServices();
    return <OrderProvider availableServices={servicesData}>{children}</OrderProvider>;
}