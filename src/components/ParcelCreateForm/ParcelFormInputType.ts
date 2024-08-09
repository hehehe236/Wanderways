export type OptionSelectType = {
    label: string;
    value: string;
};

export type ParcelFormInputType = {
    selectType: OptionSelectType;
    detailsParcel?: string;
    deliveryAddress: OptionSelectType;
    shippingAddress: OptionSelectType;
    recipientName: string;
    recipientLastName?: string;
    recipientEmail?: string;
    recipientPhone?: string;
    deliveryDate: Date;
};
