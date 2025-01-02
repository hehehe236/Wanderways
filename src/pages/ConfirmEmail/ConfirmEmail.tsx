import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from './ConfirmEmail.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { IconMailFast } from '@/shared/svg/IconMailFast.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';

const ConfirmEmail = () => {
    const { t } = useTranslation();
    const { state } = useLocation();
    return (
        <main className={cls.container}>
            <ArrowBack />
            <div className={cls.container_icon} data-testid='iconMailFast'>
                <IconTitlePageBlock icon={<IconMailFast />} title={t('confirmEmail.title')} />
            </div>
            <Text size='body3_font_bold' color='secondary' className={cls.text}>
                {t('confirmEmail.subtitle')}
            </Text>
            <Link to={`mailto:${state?.email}`} className={cls.link} data-testid='btnOpenEmail'>
                <Text size='body2_font_bold' color='white'>
                    {t('confirmEmail.btnSubmit')}
                </Text>
            </Link>
        </main>
    );
};

export default ConfirmEmail;
