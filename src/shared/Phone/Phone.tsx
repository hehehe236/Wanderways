import { defaultCountries, parseCountry, PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { ControllerRenderProps, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { useState } from 'react';

import cls from './Phone.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { FormInputType } from '@/components/ParcelCreateForm/ParcelCreateForm.tsx';
import { useTranslation } from 'react-i18next';

const filteredCountries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ['ua'].includes(iso2);
});

export type PhoneType = {
    field: ControllerRenderProps<FormInputType>;
    error: Merge<FieldError, FieldErrorsImpl<{ recipientPhone: string }>> | undefined;
    label: string;
};

export const Phone = (prop: PhoneType) => {
    const { field, error, label } = prop;
    const { t } = useTranslation();
    const [phone, setPhone] = useState('');

    const handleChange = (phone: string) => {
        setPhone(phone);
        field.onChange(phone);
    };

    return (
        <div className={cls.container}>
            <Text size='headline3_bold' color='primary' className={cls.label}>
                {label}
            </Text>
            <div className={cls.container_phone}>
                <PhoneInput
                    defaultCountry='ua'
                    countries={filteredCountries}
                    value={phone}
                    onChange={handleChange}
                />
            </div>
            {error && (
                <Text size='body4_font_bold' color='red' className={cls.error}>
                    {t(`messages.${error.message}`)}
                </Text>
            )}
        </div>
    );
};
