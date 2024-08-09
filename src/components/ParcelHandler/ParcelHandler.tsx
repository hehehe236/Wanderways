import cls from './ParcelHandler.module.css';
import { ParcelManager } from '@/shared/ParcelManager/ParcelManager.tsx';
import { IconPackagingArrowUp } from '@/shared/svg/IconPackagingArrowUp.tsx';
import { IconDelivery } from '@/shared/svg/IconDelivery.tsx';

export const ParcelHandler = () => {
    return (
        <section className={cls.container}>
            <ParcelManager text={'Send parcel'} icon={<IconPackagingArrowUp />} path={'/parcel'} />
            <ParcelManager text={'Deliver parcel'} icon={<IconDelivery />} path={'/ride'} />
        </section>
    );
};
