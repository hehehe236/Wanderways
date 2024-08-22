import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import cls from './ProfileEmailForm.module.css';
import { Input } from '@/shared/Input/Input.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ValidateSchemaProfileEmailForm } from '@/components/ProfileEmailForm/ValidateSchemaProfileEmailForm.ts';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { IconLockClose } from '@/shared/svg/IconLockClose.tsx';
import { useEditEmailMutation } from '@/store/services/profileService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { selectProfileEmail } from '@/store/features/profile/profileSlice.ts';
import notification from '@/utils/NotificationManager.ts';
import { InputPassword } from '@/shared/InputPassword/InputPassword.tsx';

export type ProfileEmailFormType = {
    recipientEmail: string;
    recipientPassword: string;
};

export const ProfileEmailForm = () => {
    const email = useSelector(selectProfileEmail);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileEmailFormType>({
        resolver: yupResolver(ValidateSchemaProfileEmailForm),
        mode: 'onSubmit',
        defaultValues: {
            recipientEmail: email,
        },
    });

    const [editProfile, { isLoading }] = useEditEmailMutation();

    const onSubmit: SubmitHandler<ProfileEmailFormType> = async (data) => {
        const response = await editProfile({
            senderId: 1,
            email: data.recipientEmail,
            password: data.recipientPassword,
        });
        if (response.data) notification.showSuccess('Email changed successfully');
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} data-testid='profileEmailForm'>
                <ul className={cls.container_list}>
                    <li>
                        <Input
                            name='recipientEmail'
                            type='text'
                            label='New email'
                            icon={<IconEmail />}
                            placeholder='Email'
                            error={errors.recipientEmail}
                            register={register}
                        />
                    </li>
                    <li>
                        <InputPassword
                            name='recipientPassword'
                            label='Password'
                            placeholder='Password'
                            error={errors.recipientPassword}
                            icon={<IconLockClose />}
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
        </>
    );
};
