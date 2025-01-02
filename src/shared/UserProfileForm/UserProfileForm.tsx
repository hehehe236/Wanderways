import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './UserProfileForm.module.css';
import { Input } from '@/shared/Input/Input.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import notification from '@/utils/NotificationManager.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { ValidateSchemaUserProfileFormProps } from '@/shared/UserProfileForm/ValidateSchemaUserProfileForm.ts';
import { IconProfile } from '@/shared/svg/IconProfile.tsx';
import { Phone } from '@/shared/Phone/Phone.tsx';
import { AddYourCar } from '@/components/AddYourCar/AddYourCar.tsx';
import { InputCheckBox } from '@/shared/InputCheckBox/InputCheckBox.tsx';
import { selectProfileGeneral } from '@/store/features/profile/profileSlice.ts';

export type UserProfileFormProps = {
    handleUserAction: (
        data: UserProfileFormType
    ) => Promise<
        { data: Partial<UserProfileFormType> } | { error: FetchBaseQueryError | SerializedError }
    >;
    isLoading: boolean;
    messageSuccess: string;
    messageError: string;
    btnText: string;
};

export type UserProfileFormType = {
    name: string;
    surname?: string;
    phone?: string;
    wantToBeDriver?: boolean;
};

export const UserProfileForm = (props: UserProfileFormProps) => {
    const { handleUserAction, isLoading, messageSuccess, messageError, btnText } = props;
    const { t } = useTranslation();
    const { name, surname, phone } = useSelector(selectProfileGeneral);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<UserProfileFormType>({
        resolver: yupResolver(ValidateSchemaUserProfileFormProps),
        mode: 'onSubmit',
        defaultValues: {
            name,
            surname,
            phone,
        },
    });

    const selectedWantToBeDriver = watch('wantToBeDriver');

    const onSubmit: SubmitHandler<UserProfileFormType> = async (data) => {
        const response = await handleUserAction({
            name: data.name,
            surname: data.surname,
            phone: data.phone,
        });
        if ('data' in response) {
            notification.showSuccess(messageSuccess);
        } else if ('error' in response) {
            notification.showError(messageError);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} data-testid='userProfileForm'>
                <ul className={cls.container_list}>
                    <li data-testid='name'>
                        <Input
                            name='name'
                            type='text'
                            label={t('userProfileForm.nameLabel')}
                            placeholder={t('userProfileForm.namePlaceholder')}
                            icon={<IconProfile />}
                            error={errors.name}
                            register={register('name')}
                        />
                    </li>
                    <li data-testid='surname'>
                        <Input
                            name='surname'
                            type='text'
                            label={t('userProfileForm.surnameLabel')}
                            placeholder={t('userProfileForm.surnamePlaceholder')}
                            icon={<IconProfile />}
                            error={errors.surname}
                            register={register('surname')}
                        />
                    </li>
                    <li data-testid='phone'>
                        <div className={cls.container_phone}>
                            <Controller
                                name='phone'
                                control={control}
                                render={({ field }) => (
                                    <Phone
                                        field={field}
                                        error={errors.phone}
                                        label={t('userProfileForm.phoneLabel')}
                                    />
                                )}
                            />
                        </div>
                    </li>
                    <li>
                        <InputCheckBox register={register} text={t('checkbox.label')} />
                    </li>
                </ul>
                {selectedWantToBeDriver && <AddYourCar />}
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
