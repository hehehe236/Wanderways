import { ReactElement } from 'react';

export type OptionSelectType = {
    label: string;
    value: string | ReactElement;
};

export type ProfileVehicleFormType = {
    vehicleType: OptionSelectType;
    modelName: string;
    modelType: OptionSelectType;
    idNumber: string;
};
