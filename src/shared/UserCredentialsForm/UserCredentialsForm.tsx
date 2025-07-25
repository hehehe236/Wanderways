import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from './UserCredentialsForm.module.css';
import { Input } from '@/shared/Input/Input.tsx';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { InputPassword } from '@/shared/InputPassword/InputPassword.tsx';
import { IconLockClose } from '@/shared/svg/IconLockClose.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { clearProfile, selectProfileEmail } from '@/store/features/profile/profileSlice.ts';
import { ValidateSchemaUserCredentialsForm } from '@/shared/UserCredentialsForm/ValidateSchemaUserCredentialsForm.ts';
import notification from '@/utils/NotificationManager.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { ROUTES } from '@/utils/routes.ts';

export type UserCredentialsFormProps = {
    handleUserAction: (
        data: UserCredentialsFormType
    ) => Promise<
        | { data: Partial<UserCredentialsFormType> }
        | { error: FetchBaseQueryError | SerializedError }
    >;
    isLoading: boolean;
    messageSuccess: string;
    messageError: string;
    additionNode?: ReactNode;
    btnText: string;
};

export type UserCredentialsFormType = {
    email: string;
    password: string;
};

export const UserCredentialsForm = (props: UserCredentialsFormProps) => {
    const { t } = useTranslation();
    const { handleUserAction, isLoading, messageError, additionNode, btnText } = props;
    const email = useSelector(selectProfileEmail);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const redirect = useNavigate();
    if (pathname === '/signin') dispatch(clearProfile());
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserCredentialsFormType>({
        resolver: yupResolver(ValidateSchemaUserCredentialsForm),
        mode: 'onSubmit',
        defaultValues: {
            email: email,
        },
    });

    const onSubmit: SubmitHandler<UserCredentialsFormType> = async (data) => {
        const response = await handleUserAction({
            email: data.email,
            password: data.password,
        });
        if ('data' in response) {
            if (pathname === '/signup') {
                redirect(ROUTES.CONFIRM_EMAIL.path, { state: data.email });
            } else redirect(ROUTES.HOME.path);
        } else if ('error' in response) {
            notification.showError(messageError);
        }
    };

    if (isLoading) return <Loader />;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} data-testid='userCredentialsForm'>
                <ul className={cls.container_list}>
                    <li>
                        <Input
                            name='email'
                            type='email'
                            label={t('userCredentialsForm.emailLabel')}
                            icon={<IconEmail />}
                            placeholder={t('userCredentialsForm.emailPlaceholder')}
                            error={errors.email}
                            register={register('email')}
                        />
                    </li>
                    <li>
                        <InputPassword
                            name='password'
                            label={t('userCredentialsForm.passwordLabel')}
                            placeholder={t('userCredentialsForm.passwordPlaceholder')}
                            error={errors.password}
                            icon={<IconLockClose />}
                            register={register('password')}
                        />
                    </li>
                </ul>
                {additionNode}
                <Button
                    variant='submit'
                    type='submit'
                    background='primary'
                    size='submit'
                    className={cls.btn}
                >
                    <Text size='body2_font_bold' color='white'>
                        {btnText}
                    </Text>
                </Button>
            </form>
        </>
    );
};
