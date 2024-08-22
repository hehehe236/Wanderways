import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import cls from './ProfileEditForm.module.css';
import { Input } from '@/shared/Input/Input.tsx';
import { IconProfile } from '@/shared/svg/IconProfile.tsx';
import { Phone } from '@/shared/Phone/Phone.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ValidateSchemaProfileEditForm } from '@/components/ProfileEditForm/ValidateSchemaProfileEditForm.ts';
import { useEditProfileMutation } from '@/store/services/profileService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { selectProfileGeneral } from '@/store/features/profile/profileSlice.ts';
import notification from '@/utils/NotificationManager.ts';

export type ProfileEditFormType = {
    recipientName: string;
    recipientLastName?: string;
    recipientPhone?: string;
};

export const ProfileEditForm = () => {
    const { name, lastName, phone } = useSelector(selectProfileGeneral);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileEditFormType>({
        resolver: yupResolver(ValidateSchemaProfileEditForm),
        mode: 'onSubmit',
        defaultValues: {
            recipientName: name,
            recipientLastName: lastName,
            recipientPhone: phone,
        },
    });

    const [editProfile, { isLoading }] = useEditProfileMutation();

    const onSubmit: SubmitHandler<ProfileEditFormType> = async (data) => {
        const response = await editProfile({
            senderId: 1,
            name: data.recipientName,
            lastName: data.recipientLastName,
            phone: data.recipientPhone,
        });
        if (response.data) notification.showSuccess('Profile changed successfully');
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} data-testid='profileEditForm'>
                <ul className={cls.container_list}>
                    <li>
                        <Input
                            name='recipientName'
                            type='text'
                            label='Name'
                            icon={<IconProfile />}
                            placeholder='Name'
                            error={errors.recipientName}
                            register={register}
                        />
                    </li>
                    <li>
                        <Input
                            name='recipientLastName'
                            type='text'
                            label='Surname'
                            icon={<IconProfile />}
                            placeholder='Surname'
                            error={errors.recipientLastName}
                            register={register}
                        />
                    </li>
                    <li>
                        <div className={cls.container_phone}>
                            <Controller
                                name='recipientPhone'
                                control={control}
                                render={({ field }) => (
                                    <Phone
                                        field={field}
                                        error={errors.recipientPhone}
                                        label='Phone number'
                                    />
                                )}
                            />
                        </div>
                    </li>
                </ul>
                <Button
                    variant='submit'
                    type='submit'
                    background='primary'
                    size='submit'
                    className={cls.btn}
                >
                    <Text size='body2_font_bold' color='white'>
                        Save changes
                    </Text>
                </Button>
            </form>
        </>
    );
};
