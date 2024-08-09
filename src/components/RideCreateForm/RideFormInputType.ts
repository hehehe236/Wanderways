export type OptionSelectType = {
    label: string;
    value: string;
};

export type RideFormInputType = {
    deliveryAddress: OptionSelectType;
    shippingAddress: OptionSelectType;
    deliveryDate: Date;
    vehicleId?: number;
};
