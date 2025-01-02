import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import cls from './SendFeedbackForm.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ValidateSchemaSendFeedbackForm } from './ValidateSchemaSendFeedbackForm.ts';
import { TextArea } from '@/shared/TextArea/TextArea.tsx';

export type SendFeedbackFormType = {
    feedback: string;
};

export const SendFeedbackForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SendFeedbackFormType>({
        resolver: yupResolver(ValidateSchemaSendFeedbackForm),
        mode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<SendFeedbackFormType> = () =>
        navigate('/confirm-delivery/feedback-confirmation');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cls.form} data-testid='sendFeedbackForm'>
            <TextArea
                id='feedback'
                label={t('sendFeedback.label')}
                placeholder={t('sendFeedback.placeholder')}
                error={errors.feedback}
                register={register('feedback')}
            />

            <Button
                variant='submit'
                type='submit'
                background='primary'
                size='submit'
                className={cls.btn}
            >
                <Text size='body2_font_bold' color='white'>
                    {t('sendFeedback.btnSubmit')}
                </Text>
            </Button>
        </form>
    );
};
