import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from './VerifiedEmail.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconCheckmark } from '@/shared/svg/IconCheckmark.tsx';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';

const VerifiedEmail = () => {
    const { t } = useTranslation();
    return (
        <main className={cls.container}>
            <div className={cls.container_icon} data-testid='iconCheckmark'>
                <IconTitlePageBlock icon={<IconCheckmark />} title={t('verifiedEmail.title')} />
            </div>
            <Link to='/' className={cls.link} data-testid='btnContinue'>
                <Text size='body2_font_bold' color='white'>
                    {t('verifiedEmail.btnSubmit')}
                </Text>
            </Link>
        </main>
    );
};

export default VerifiedEmail;
