import { Link } from 'react-router-dom';

import cls from './BtnSignOut.module.css';
import { IconLogOut } from '@/shared/svg/IconLogOut.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { useTranslation } from 'react-i18next';

export const BtnSignOut = () => {
    const { t } = useTranslation();
    return (
        <Link to='signout' className={cls.btn} data-testid='btnSignOut'>
            <div className={cls.text_btn}>
                <IconLogOut addStyle={cls.icon_signout} />
                <Text size='body2_font_bold' color='blue' className={cls.text}>
                    {t('profile.btnSignOut')}
                </Text>
            </div>
        </Link>
    );
};
