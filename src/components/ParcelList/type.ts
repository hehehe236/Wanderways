export type Address = {
    country: string;
    city: string;
    street: string;
};

export type ParcelListProps = {
    senderId: number;
    status?: 'In Transit' | 'Failed' | 'Delivered' | 'New';
    type: string;
    cost: number;
    shippingAddress: Address;
    deliveryAddress: Address;
}