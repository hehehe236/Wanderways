import ReactSelect from 'react-select';
import { ReactElement } from 'react';
import { ControllerRenderProps, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import cls from './Select.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import {
    ParcelFormInputType,
    OptionSelectType,
} from '@/components/ParcelCreateForm/ParcelFormInputType.ts';
import { RideFormInputType } from '@/components/RideCreateForm/RideFormInputType.ts';

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
        | ControllerRenderProps<RideFormInputType, 'deliveryAddress'>;
};

export const Select = (props: SelectType) => {
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
                    {error.value?.message}
                </Text>
            )}
        </>
    );
};
