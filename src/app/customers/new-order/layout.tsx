import { OrderProvider } from './order-context';
import {getAllServices} from "@/lib/services-repository";
import {getCustomerLocations} from "@/lib/customer-repository";
import {getCurrentSession} from "@/lib/session-repository";

export default async function NewOrderLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const user = await getCurrentSession();
    const servicesData = await getAllServices();
    const customerLocations = await getCustomerLocations(parseInt(user!.sub!));
    return <OrderProvider availableServices={servicesData} locations={customerLocations}>{children}</OrderProvider>;
}