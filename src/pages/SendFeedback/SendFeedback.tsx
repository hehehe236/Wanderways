import { useTranslation } from 'react-i18next';

import cls from './SendFeedback.module.css';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';
import { IconLike } from '@/shared/svg/IconLike.tsx';
import { SendFeedbackForm } from '@/components/SendFeedbackForm/SendFeedbackForm.tsx';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';

const SendFeedback = () => {
    const { t } = useTranslation();
    return (
        <main className={cls.container}>
            <ArrowBack />
            <div className={cls.iconTitleWrapper}>
                <IconTitlePageBlock icon={<IconLike />} title={t('sendFeedback.title')} />
            </div>
            <SendFeedbackForm />
        </main>
    );
};

export default SendFeedback;
