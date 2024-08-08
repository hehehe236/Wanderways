import DatePickerLib from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ControllerRenderProps, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { useRef } from 'react';

import { FormInputType } from '@/components/ParcelCreateForm/ParcelCreateForm.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import cls from './DatePicker.module.css';
import { Placeholder } from '@/shared/Placeholder/Placeholder.tsx';
import { IconClock } from '@/shared/svg/IconClock.tsx';

export type DatePickerProps = {
    error: Merge<FieldError, FieldErrorsImpl<{ deliveryDate: Date }>> | undefined;
    field: ControllerRenderProps<FormInputType>;
};

export const DatePicker = ({ field, error }: DatePickerProps) => {
    const datePickerRef = useRef<DatePickerLib>(null);

    const handleClickPlaceholder = () => {
        if (datePickerRef.current) datePickerRef.current.setOpen(true);
    };

    return (
        <div className={cls.datePickerWrapper}>
            <Text size={'headline3_bold'} color={'primary'} className={cls.label}>
                Delivery time
            </Text>
            <DatePickerLib
                showTimeSelect
                popperPlacement={'top'}
                dateFormat='MMMM d, yyyy h:mm aa'
                timeIntervals={30}
                E
                isClearable
                {...field}
                selected={field.value}
                onChange={field.onChange}
                ref={datePickerRef}
            />
            {error && (
                <Text size={'body4_font_bold'} color={'red'} className={cls.error}>
                    {error.message}
                </Text>
            )}
            {!field.value && (
                <div className={cls.placeholder} onClick={handleClickPlaceholder}>
                    <Placeholder icon={<IconClock />} text={'From-To'} />
                </div>
            )}
        </div>
    );
};
