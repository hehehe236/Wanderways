import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';

import cls from './TextArea.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { FormInputType } from '@/components/ParcelCreateForm/ParcelCreateForm.tsx';

export type TextAreaType = {
    label: string;
    placeholder: string;
    error: Merge<FieldError, FieldErrorsImpl<{ detailsParcel: string }>> | undefined;
    register: UseFormRegister<FormInputType>;
};

export const TextArea = (props: TextAreaType) => {
    const { label, placeholder, error, register } = props;

    return (
        <>
            <label htmlFor='detailsParcel' className={cls.label}>
                <Text size='headline3_bold' color='primary' className={cls.label}>
                    {label}
                </Text>
            </label>
            <textarea
                id='detailsParcel'
                {...register('detailsParcel')}
                rows={2}
                className={cls.textarea}
                placeholder={placeholder}
            />
            {error && (
                <Text size='body4_font_bold' color='red' className={cls.error}>
                    {error.message}
                </Text>
            )}
        </>
    );
};
