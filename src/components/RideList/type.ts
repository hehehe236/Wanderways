export type Address = {
    country: string;
    city: string;
    street: string;
};

export type  Profile = {
    name: string;
    lastName: string;
    phoneNumber: string;
}

export type Parcel = {
    details: string;
    comment: string;
    cost: number;
    recipient: Profile;
    sender: Profile;
}

export type RideListProps = {
    driverId: number,
    details: string,
    departureAddress: Address,
    arrivalAddress: Address,
    totalCost: number,
    status: 'In Transit' | 'Failed' | 'Delivered' | 'New';
    acceptedParcels: Parcel[],
    parcelsTypes: string[]
}