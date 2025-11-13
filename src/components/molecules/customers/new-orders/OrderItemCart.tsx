import {Shirt} from "lucide-react";
import {ServiceProp} from "@/app/customers/new-order/order-context";

export function OrderItemCart({ serviceItem, onRemove }: { serviceItem: ServiceProp, onRemove: (serviceId: number) => void }) {
    return (
        <div
            className="
                group
                bg-white px-2 pt-2 rounded-xl shadow-md border border-gray-200
                text-center
                transition-all duration-300
                hover:shadow-lg hover:border-blue-500
                cursor-pointer
                flex justify-start mt-3 gap-6"
            onClick={()=> onRemove(serviceItem.id)}
        >
            {/* Icon with modern background */}
            <div
                className="
                      w-16 h-14 bg-blue-100 rounded-full
                      flex items-center justify-center
                      mx-auto mb-4
                      transition-all duration-300
                      group-hover:bg-blue-600
                    "
            >
                <Shirt
                    className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:text-white"
                />
            </div>

            {/* Service Name */}
            <div className="flex flex-2/3 items-start flex-col">
                <p
                    className="font-semibold text-gray-900 text-lg mb-1 transition-colors group-hover:text-blue-600"
                >
                    {serviceItem.name}
                </p>

                {/* Description */}
                <p
                    className="text-left
          text-sm text-gray-500
          line-clamp-2
          flex-grow
        "
                >
                    {serviceItem.descriptions}
                </p>
            </div>
        </div>
    )
}