export type Address = {
    city: string;
    street: string;
    country: string;
}

export type ParcelGeneralInfoProps = {
    senderId: number;
    type: string;
    cost: number;
    shippingAddress: Address;
    deliveryAddress: Address;
    children: React.ReactNode;
}