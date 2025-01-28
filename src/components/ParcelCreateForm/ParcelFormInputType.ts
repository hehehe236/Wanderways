import { ReactElement } from 'react';

export type OptionSelectType = {
    label: string;
    value: string | ReactElement;
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
