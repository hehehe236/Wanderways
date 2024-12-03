import cls from './SendFeedback.module.css';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';
import { IconLike } from '@/shared/svg/IconLike.tsx';
import { SendFeedbackForm } from '@/components/SendFeedbackForm/SendFeedbackForm.tsx';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';

const SendFeedback = () => {
    return (
        <main className={cls.container}>
            <ArrowBack />
            <div className={cls.iconTitleWrapper}>
                <IconTitlePageBlock icon={<IconLike />} title='Leave feedback' />
            </div>
            <SendFeedbackForm />
        </main>
    );
};

export default SendFeedback;
