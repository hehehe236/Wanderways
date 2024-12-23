import ReactSelect from 'react-select';
import { ReactElement } from 'react';
import { ControllerRenderProps, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import cls from './Select.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import {
    OptionSelectType,
    ParcelFormInputType,
} from '@/components/ParcelCreateForm/ParcelFormInputType.ts';
import { RideFormInputType } from '@/components/RideCreateForm/RideFormInputType.ts';
import { ProfileVehicleFormType } from '@/components/ProfileVehicleForm/ProfileVehicleType.ts';
import { useTranslation } from 'react-i18next';

export type SelectType = {
    options: OptionSelectType[];
    placeholder: ReactElement | string;
    label: string;
    error: Merge<FieldError, FieldErrorsImpl<{ label: string; value: string }>> | undefined;
    field:
        | ControllerRenderProps<
              ParcelFormInputType,
              'deliveryAddress' | 'shippingAddress' | 'selectType'
          >
        | ControllerRenderProps<RideFormInputType, 'deliveryAddress'>
        | ControllerRenderProps<ProfileVehicleFormType, 'vehicleType' | 'modelType'>;
};

export const Select = (props: SelectType) => {
    const { t } = useTranslation();
    const { options, placeholder, label, error, field } = props;
    return (
        <>
            <label htmlFor={label}>
                <Text size='headline3_bold' color='primary' className={cls.label}>
                    {label}
                </Text>
            </label>
            <ReactSelect
                id={label}
                classNamePrefix='custom-select'
                className={cls.container}
                options={options}
                placeholder={placeholder}
                menuPlacement='auto'
                {...field}
            />
            {error && (
                <Text size='body4_font_bold' color='red' className={cls.error}>
                    {error.value
                        ? t(`messages.${error.value?.message}`)
                        : t(`messages.${error.message}`)}
                </Text>
            )}
        </>
    );
};
