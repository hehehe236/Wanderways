import { Link, useLocation } from 'react-router-dom';

import cls from './ConfirmEmail.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { IconMailFast } from '@/shared/svg/IconMailFast.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';

const ConfirmEmail = () => {
    const { state } = useLocation();
    return (
        <main className={cls.container}>
            <ArrowBack />
            <div className={cls.container_icon} data-testid='iconMailFast'>
                <IconTitlePageBlock icon={<IconMailFast />} title='Confirm your email' />
            </div>
            <Text size='body3_font_bold' color='secondary' className={cls.text}>
                A confirmation email has been sent to your email. Click on the link in the letter to
                confirm your email
            </Text>
            <Link to={`mailto:${state?.email}`} className={cls.link} data-testid='btnOpenEmail'>
                <Text size='body2_font_bold' color='white'>
                    Open email app
                </Text>
            </Link>
        </main>
    );
};

export default ConfirmEmail;
