import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';

import cls from './TextArea.module.css';
import { Text } from '@/shared/Text/Text.tsx';

export type TextAreaType = {
    id: string;
    label: string;
    placeholder: string;
    error: Merge<FieldError, FieldErrorsImpl<{ detailsParcel: string }>> | undefined;
    register: UseFormRegisterReturn;
};

export const TextArea = (props: TextAreaType) => {
    const { id, label, placeholder, error, register } = props;

    return (
        <>
            <label htmlFor={id} className={cls.label}>
                <Text size='headline3_bold' color='primary' className={cls.label}>
                    {label}
                </Text>
            </label>
            <textarea
                id={id}
                {...register}
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
