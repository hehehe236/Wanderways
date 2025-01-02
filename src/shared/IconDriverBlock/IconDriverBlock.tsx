import { useTranslation } from 'react-i18next';

import cls from './IconDriverBlock.module.css';
import { IconWheel } from '@/shared/svg/IconWheel.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export const IconDriverBlock = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.product_info} data-testid='iconDriverBlock'>
            <div className={cls.container_wheel}>
                <IconWheel addStyle={cls.wheel} />
            </div>
            <div className={cls.driver}>
                <Text size='headline2_bold' color='primary'>
                    {t('confirmDelivery.driverName')}
                </Text>
                <Text size='body4_font_bold' color='secondary'>
                    {t('confirmDelivery.driver')}
                </Text>
            </div>
        </div>
    );
};
