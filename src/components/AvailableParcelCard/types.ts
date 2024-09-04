export type Address = {
    country: string;
    city: string;
    street: string;
};

export type Parcel = {
    parcelId: number;
    type: string;
    details: string;
    cost: number;
    departureAddress: Address;
    departureDate: string;
    arrivalAddress: Address;
    arrivalDate: string;
};
