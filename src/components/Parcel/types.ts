export type Address = {
    country: string;
    city: string;
    street: string;
}

export type ParcelRecepientSender = {
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export type ParcelProps = {
    senderId?: number;
    details: string;
    shippingAddress: Address;
    shippingDate?: Date;
    deliveryAddress: Address;
    deliveryDate?: Date;
    type?: string;
    cost: number;
    status: 'In Transit' | 'Failed' | 'Delivered' | 'New' ;
    recipient?: ParcelRecepientSender;
}