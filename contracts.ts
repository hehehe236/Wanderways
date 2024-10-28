type MessageCategory = "Information" | "ApplicationError" | "ServerError";

type Message = {
    msg: string;
    code: number;
    category: MessageCategory;
    data: JSON
}

type ResponseBase = {
    messages: [],
    success: boolean
}

// ------ Domain types ------

type UserCar = {
    userId: number;
    brand: string;
    model: string;
    year: number;
    licensePlate: string;
}

type UserCars = {
    cars: UserCar[];
}

type DrivingExperience = "Beginner" | "Intermediate" | "Expert";

type Address = {
    country: string;
    city: string;
    street: string;
}

type ParcelRecepientSender = {
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

type Parcel = {
    senderId: number;
    details: string;
    shippingAddress: Address;
    shippingDate: Date;
    deliveryAddress: Address;
    deliveryDate?: Date;
    type: string;
    cost: number;
    status: string;
    recipient: ParcelRecepientSender;
}

type Ride = {
    status: string;
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate: Date;
    arrivalDate: Date;
    acceptedParcels?: AcceptedParcel[];
    totalCost?: number;
    requests?: DeliveryRequests[];
}

// ------ /Domain types ------

// ------ API -------

// [POST] api/signin
type SignIn = {
    userName: string;
    password: string;
}

// [POST] api/signup
type SignUp = {
    userName: string;
    password: string;
}

// [POST] api/signup/restorepassword
type RestorePassword = {
    userName: string;
}

// [POST] api/signout

type ChangePassword = {
    password: string;
    newPassword: string;
}

// [POST&PUT] api/profile
type Profile = {
    userId: number;
    name: string;
    lastName: string;
    profilePicture: string;
}

type EditProfile = {
    userId: number;
    name: string;
    lastName: string;
    phoneNumber: string;
    drivingExperience: DrivingExperience;
}

type EditProfileRequest = Profile & {}

// [POST&PUT] api/profile/email
type EditEmail = {
    userName: string;
    password: string;
}

type EditEmailRequest = EditEmail & {}

// [POST&PUT] api/profile/password

type EditPassword = {
    password: string;
    newPassword: string;
}

type EditPasswordRequest = EditPassword & {}

// [GET] api/parcels/{userId}

type Parcels = {
    parcels?: Parcel[];
}

type GetParcelsResponse = Parcels & {}

// [GET] api/parcels/getbyid/{parcelId}

type DriverDeliveryRequest = {
    driverId: number;
}

type GetParcel = Parcel & {
    parcellId: number;
    driverId?: number;
    requests?: DriverDeliveryRequest[];
}

type GetParcelResponse = Parcel & {}

// [GET] api/rides/{userId}

type Rides = {
    rides: Ride[];
}

type GetRidesResponse = Rides & {}

// [GET] api/rides/getbyid/{rideId}

type AcceptedParcel = {
    parcelId: number;
}

type DeliveryRequests = {
    parcelId: number;
}

type GetRideResponse = Ride & {}

// [POST] api/parcels
type AddParcelRequest = {
    senderId: number;
    details: string;
    shippingAddress: Address;
    shippingDate: Date;
    deliveryAddress: Address;
    deliveryDate?: Date;
    type: string;
    recipient: ParcelRecepientSender;
}

type AddParcelResponse = ResponseBase & {}

// [POST] api/rides
type AddRideRequest = {
    driverId: number;
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate: Date;
    carId?: number;
}

type AddRideResponse = ResponseBase & {}

// [POST] api/rides/{driverId}/vehicle

type AddVehicleRequest = {
    modelName: string;
    carType: string;
    idNumber: string;
}

type AddVehicleResponse = ResponseBase & {}

// [GET] api/rides/{driverId}/vehicles

type GetVehiclesRequest = {
    driverId: number;
}

type GetVehiclesResponse = {
    vehicles: UserCar[];
}

// [GET] api/rides/find

type GetAvailableRidesRequest = {
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate: Date;
}

type GetAvailableRidesResponse = {
    rides: Ride[];
}

// [POST] api/rides/{rideId}/request

type RequestDeliveryRequest = {
    parcelId: number;
    cost: number;
}

type RequestDeliveryResponse = ResponseBase & {}

// [GET] api/parcels/find

type GetAvailableParcelsRequest = {
    shippingAddress: Address;
    deliveryAddress: Address;
    shippingDate: Date;
}

type GetAvailableParcelsResponse = {
    parcels: Parcel[];
}

// [POST] api/parcels/{parcelId}/request

type RequestParcelDeliveryRequest = {
    driverId: number;
    cost: number;
}

type RequestParcelDeliveryResponse = ResponseBase & {}

// [POST] api/rides/{rideId}/accept

type AcceptDeliveryRequest = {
    parcelId: number;
}

type AcceptDeliveryResponse = ResponseBase & {}

// [POST] api/rides/{rideId}/cancel

type CancelDeliveryRequest = {
    parcelId: number;
}

type CancelDeliveryResponse = ResponseBase & {}

// [POST] api/parsels/{parcelId}/accept

type AcceptParcelRequest = {
    driverId: number;
}

type AcceptParcelResponse = ResponseBase & {}

// [POST] api/parsels/{parcelId}/cancel

type CancelParcelRequest = {
    driverId: number;
}

type CancelParcelResponse = ResponseBase & {}