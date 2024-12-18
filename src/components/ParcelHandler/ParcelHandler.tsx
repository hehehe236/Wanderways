import cls from './ParcelHandler.module.css';
import { ParcelManager } from '@/shared/ParcelManager/ParcelManager.tsx';
import { IconPackagingArrowUp } from '@/shared/svg/IconPackagingArrowUp.tsx';
import { IconDelivery } from '@/shared/svg/IconDelivery.tsx';
import { useTranslation } from 'react-i18next';

export const ParcelHandler = () => {
    const { t } = useTranslation();
    return (
        <section className={cls.container}>
            <ParcelManager
                text={t('home.parcelManager.send')}
                icon={<IconPackagingArrowUp />}
                path='/parcel'
            />
            <ParcelManager
                text={t('home.parcelManager.deliver')}
                icon={<IconDelivery />}
                path='/ride'
            />
        </section>
    );
};
