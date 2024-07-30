export type Address = {
    street: string;
    city: string;
    country: string;
}

export type Driver = {
    name: string;
    lastName: string;
    phoneNumber: string;
}

export type Recipient = {
    name: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
}

export type ParcelAdditionalInfoType = {
    driver?: Driver;
    recipient: Recipient;
}

export type ParcelGeneralInfoType = {
    parcelId: number;
    senderId: number;
    status: 'In Transit' | 'Failed' | 'Delivered' | 'New';
    type: string;
    cost: number;
    shippingAddress: Address;
    shippingDate?: string;
    deliveryAddress: Address;
    deliveryDate?: string;
}

export type Parcel = ParcelGeneralInfoType & Partial<ParcelAdditionalInfoType>;