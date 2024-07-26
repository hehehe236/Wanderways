export type Address = {
    city: string;
    street: string;
    country: string;
}

export type RideGeneralInfoProps = {
    driverId: number;
    type: string;
    totalCost: number;
    departureAddress: Address;
    arrivalAddress: Address;
    children: React.ReactNode;
}