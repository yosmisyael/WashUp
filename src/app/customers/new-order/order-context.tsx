"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import {ITEM_UNIT, ORDER_TYPE} from "../../../../prisma/generated/enums";

export type ServiceProp = {
    id: number;
    name: string;
    completionTimeInHours: number;
    price: number;
    unit: ITEM_UNIT;
    descriptions: string;
}

export type OrderContextType = {
    availableServices: ServiceProp[];
    selectedServices: ServiceProp[];
    setSelectedServices: (services: ServiceProp[]) => void;
    orderType: ORDER_TYPE;
    setOrderType: (type: ORDER_TYPE) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children, availableServices }: { children: ReactNode, availableServices: ServiceProp[] }) {
    const [selectedServices, setSelectedServices] = useState<ServiceProp[]>([]);
    const [orderType, setOrderType] = useState<ORDER_TYPE>(ORDER_TYPE.delivery);

    const value = {
        availableServices,
        selectedServices,
        setSelectedServices,
        orderType,
        setOrderType,
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrderContext() {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
}