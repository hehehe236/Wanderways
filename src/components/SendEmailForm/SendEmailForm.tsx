import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import cls from './SendEmailForm.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ValidateSchemaSendEmailForm } from './ValidateSchemaSendEmailForm.ts';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { Input } from '@/shared/Input/Input.tsx';
import notification from '@/utils/NotificationManager.ts';

export type SendFeedbackFormType = {
    email: string;
};

export const SendEmailForm = ({ onSubmit }: { onSubmit: () => void }) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SendFeedbackFormType>({
        resolver: yupResolver(ValidateSchemaSendEmailForm),
        mode: 'onSubmit',
    });

    const onSubmitForm: SubmitHandler<SendFeedbackFormType> = () => {
        notification.showSuccess(t('restorePassword.messageSuccess'));
        onSubmit();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitForm)}
            className={cls.form}
            data-testid='sendEmailForm'
        >
            <Input
                name='email'
                type='email'
                label={t('restorePassword.label')}
                icon={<IconEmail />}
                placeholder={t('restorePassword.placeholder')}
                error={errors.email}
                register={register('email')}
            />

            <Button
                variant='submit'
                type='submit'
                background='primary'
                size='submit'
                className={cls.btn}
            >
                <Text size='body2_font_bold' color='white'>
                    {t('restorePassword.btnSubmit')}
                </Text>
            </Button>
        </form>
    );
};
