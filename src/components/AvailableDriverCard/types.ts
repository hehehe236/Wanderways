export type Address = {
    country: string;
    city: string;
    street: string;
};

export type DrivingExperience = 'Beginner' | 'Intermediate' | 'Expert';

export type RiderCar = {
    brand: string;
    model: string;
    year: number;
    licensePlate: string;
};

export type Rider = {
    driverId: number;
    arrivalAddress: Address;
    arrivalDate: string;
    departureAddress: Address;
    departureDate: string;
    drivingExperience: DrivingExperience;
    vehicles: RiderCar;
    name: string;
    lastName: string;
};
