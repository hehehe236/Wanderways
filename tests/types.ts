export type Address = {
    city: string;
    street: string;
    country: string;
};

export type RequestParcel = {
    senderId: number;
    parcelId: number;
    status: string;
    cost: number;
    shippingAddress: Address;
    shippingDate: Date;
    deliveryAddress: Address;
    deliveryDate: Date;
    type: string;
};

export type RequestRide = {
    driverId: number;
    rideId: number;
    status: string;
    departureAddress: Address;
    departureDate: Date;
    arrivalAddress: Address;
    arrivalDate: Date;
    parcelsTypes: string[];
    totalCost: number;
};

export type RequestAccepted = {
    parcelId: number;
    rideId: number;
    type: string;
    details: string;
    cost: number;
    departureAddress: Address;
    departureDate: Date;
    arrivalAddress: Address;
    arrivalDate: Date;
    recipient: string;
    sender: string;
};
