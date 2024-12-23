import DatePickerLib from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ControllerRenderProps, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { useRef } from 'react';

import { Text } from '@/shared/Text/Text.tsx';
import cls from './DatePicker.module.css';
import { Placeholder } from '@/shared/Placeholder/Placeholder.tsx';
import { IconClock } from '@/shared/svg/IconClock.tsx';
import { ParcelFormInputType } from '@/components/ParcelCreateForm/ParcelFormInputType.ts';
import { RideFormInputType } from '@/components/RideCreateForm/RideFormInputType.ts';
import { useTranslation } from 'react-i18next';

export type DatePickerProps = {
    error: Merge<FieldError, FieldErrorsImpl<{ deliveryDate: Date }>> | undefined;
    field:
        | ControllerRenderProps<ParcelFormInputType, 'deliveryDate'>
        | ControllerRenderProps<RideFormInputType, 'deliveryDate'>;
};

export const DatePicker = ({ field, error }: DatePickerProps) => {
    const { t } = useTranslation();
    const datePickerRef = useRef<DatePickerLib>(null);

    const handleClickPlaceholder = () => {
        if (datePickerRef.current) datePickerRef.current.setOpen(true);
    };

    return (
        <div className={cls.datePickerWrapper}>
            <Text size='headline3_bold' color='primary' className={cls.label}>
                {t('parcelCreate.timeLabel')}
            </Text>
            <DatePickerLib
                showTimeSelect
                popperPlacement='top'
                dateFormat='MMMM d, yyyy h:mm aa'
                timeIntervals={30}
                isClearable
                {...field}
                selected={field.value}
                onChange={field.onChange}
                ref={datePickerRef}
            />
            {error && (
                <Text size='body4_font_bold' color='red' className={cls.error}>
                    {t(`messages.${error.message}`)}
                </Text>
            )}
            {!field.value && (
                <div className={cls.placeholder} onClick={handleClickPlaceholder}>
                    <Placeholder icon={<IconClock />} text={t('parcelCreate.timePlaceholder')} />
                </div>
            )}
        </div>
    );
};
