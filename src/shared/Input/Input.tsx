import cls from './Input.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';
import { ReactElement, useRef } from 'react';
import { Placeholder } from '@/shared/Placeholder/Placeholder.tsx';
import { ParcelFormInputType } from '@/components/ParcelCreateForm/ParcelFormInputType.ts';
import { useLocation } from 'react-router-dom';
import { UserCredentialsFormType } from '@/shared/UserCredentialsForm/UserCredentialsForm.tsx';
import { UserProfileFormType } from '@/shared/UserProfileForm/UserProfileForm.tsx';
import { useTranslation } from 'react-i18next';

export type InputType = {
    name:
        | keyof ParcelFormInputType
        | keyof UserCredentialsFormType
        | keyof UserProfileFormType
        | 'modelName'
        | 'idNumber';
    type: string;
    label: string;
    icon?: ReactElement;
    placeholder: string;
    error: Merge<FieldError, FieldErrorsImpl<{ name: string }>> | undefined;
    register: UseFormRegisterReturn;
};

export const Input = (props: InputType) => {
    const { name, type, label, icon, placeholder, error, register } = props;
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);
    const currentUrl = useLocation().pathname;

    const { ref, ...rest } = register;

    const handlePlaceholderClick = () => inputRef.current?.focus();

    return (
        <div className={cls.container}>
            <label htmlFor={name} className={cls.label}>
                <Text
                    size='headline3_bold'
                    color='primary'
                    className={
                        (name !== 'surname' && name !== 'recipientEmail') ||
                        (name === 'recipientEmail' && currentUrl === '/profile/email')
                            ? cls.label_name
                            : cls.label
                    }
                >
                    {label}
                </Text>
            </label>
            <input
                id={name}
                type={type}
                {...register}
                placeholder={icon ? '' : placeholder}
                className={cls.input}
                {...rest}
                ref={(e) => {
                    ref(e);
                    inputRef.current = e;
                }}
            />
            {icon && (
                <Placeholder
                    icon={icon}
                    text={placeholder}
                    addStyle={cls.placeholder}
                    onClick={handlePlaceholderClick}
                />
            )}
            {error && (
                <Text size='body4_font_bold' color='red' className={cls.error}>
                    {t(`messages.${error.message}`)}
                </Text>
            )}
        </div>
    );
};
