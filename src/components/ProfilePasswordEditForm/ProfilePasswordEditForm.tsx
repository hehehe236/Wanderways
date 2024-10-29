import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputPassword } from '@/shared/InputPassword/InputPassword.tsx';
import cls from '@/components/ProfilePasswordEditForm/ProfilePasswordEditForm.module.css';
import { ValidateSchemaProfilePasswordEditForm } from '@/components/ProfilePasswordEditForm/ValidateSchemaProfilePasswordEditForm.ts';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { useEditPasswordMutation } from '@/store/services/profileService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';

export type ProfilePasswordEditFormType = {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
};

export const ProfilePasswordEditForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfilePasswordEditFormType>({
        resolver: yupResolver(ValidateSchemaProfilePasswordEditForm),
        mode: 'onSubmit',
    });

    const [editPassword, { isLoading }] = useEditPasswordMutation();

    const onSubmit: SubmitHandler<ProfilePasswordEditFormType> = async (
        data: ProfilePasswordEditFormType
    ) => {
        editPassword({
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
        });
    };

    if (isLoading) return <Loader />;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className={cls.container} data-testid='passwordEditForm'>
                <li data-testid='currentPassword'>
                    <InputPassword
                        name='currentPassword'
                        label='Current password'
                        placeholder='Current password'
                        error={errors.currentPassword}
                        register={register}
                    />
                </li>
                <li data-testid='newPassword'>
                    <InputPassword
                        name='newPassword'
                        label='New password'
                        placeholder='New password'
                        error={errors.newPassword}
                        register={register}
                    />
                </li>
                <li data-testid='confirmNewPassword'>
                    <InputPassword
                        name='confirmNewPassword'
                        label='Confirm new password'
                        placeholder='Confirm new password'
                        error={errors.confirmNewPassword}
                        register={register}
                    />
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
    );
};
