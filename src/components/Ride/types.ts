export type Address = {
    country: string;
    city: string;
    street: string;
}

export type RideProps = {
    driverId?: number;
    details: string[];
    departureAddress: Address;
    departureDate?: Date;
    arrivalAddress: Address;
    arrivalDate?: Date;
    carId?: number;
    cost: number;
    status: 'In Transit' | 'Failed' | 'Delivered' | 'New' ;
}