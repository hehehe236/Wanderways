import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Text } from '@/shared/Text/Text.tsx';
import cls from './NewPassword.module.css';
import { ValidateSchemaNewPasswordForm } from './ValidateSchemaNewPasswordForm.ts';
import notification from '@/utils/NotificationManager.ts';
import { Button } from '@/shared/Button/Button.tsx';
import { InputPassword } from '@/shared/InputPassword/InputPassword.tsx';
import { IconLockClose } from '@/shared/svg/IconLockClose.tsx';

export type SendNewPasswordFormType = {
    password: string;
    confirmNewPassword: string;
};

const NewPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SendNewPasswordFormType>({
        resolver: yupResolver(ValidateSchemaNewPasswordForm),
        mode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<SendNewPasswordFormType> = () => {
        notification.showSuccess('The new password changed successfully');
    };

    return (
        <main className={cls.container}>
            <Text size='headline1_bold' className={cls.title} data-testid='title'>
                Set new password
            </Text>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={cls.form}
                data-testid='newPasswordForm'
            >
                <ul className={cls.list_input}>
                    <li>
                        <InputPassword
                            name='password'
                            label='New password'
                            icon={<IconLockClose />}
                            placeholder='Password'
                            error={errors.password}
                            register={register('password')}
                        />
                    </li>
                    <li>
                        <InputPassword
                            name='confirmNewPassword'
                            label='Confirm new password'
                            icon={<IconLockClose />}
                            placeholder='Password'
                            error={errors.confirmNewPassword}
                            register={register('confirmNewPassword')}
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
        </main>
    );
};

export default NewPassword;
