import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SendNewPasswordFormType>({
        resolver: yupResolver(ValidateSchemaNewPasswordForm),
        mode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<SendNewPasswordFormType> = () => {
        notification.showSuccess(t('newPassword.messageSuccess'));
    };

    return (
        <main className={cls.container}>
            <Text size='headline1_bold' className={cls.title} data-testid='title'>
                {t('newPassword.title')}
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
                            label={t('newPassword.label')}
                            icon={<IconLockClose />}
                            placeholder={t('newPassword.placeholder')}
                            error={errors.password}
                            register={register('password')}
                        />
                    </li>
                    <li>
                        <InputPassword
                            name='confirmNewPassword'
                            label={t('newPassword.confirmLabel')}
                            icon={<IconLockClose />}
                            placeholder={t('newPassword.placeholder')}
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
                        {t('newPassword.btnSubmit')}
                    </Text>
                </Button>
            </form>
        </main>
    );
};

export default NewPassword;
