import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cls from './SendFeedbackForm.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ValidateSchemaSendFeedbackForm } from './ValidateSchemaSendFeedbackForm.ts';
import { TextArea } from '@/shared/TextArea/TextArea.tsx';
import { useNavigate } from 'react-router-dom';

export type SendFeedbackFormType = {
    feedback: string;
};

export const SendFeedbackForm = () => {
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
                label='Your feedback'
                placeholder='Tell us about your experience...'
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
                    Submit
                </Text>
            </Button>
        </form>
    );
};
