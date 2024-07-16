import cls from './ParcelHandler.module.css';
import { ParcelManager } from '@/shared/ParcelManager/ParcelManager.tsx';
import { PackagingArrowUp } from '@/shared/svg/PackagingArrowUp.tsx';
import { Delivery } from '@/shared/svg/Delivery.tsx';

export const ParcelHandler = () => {
    return (
        <section className={cls.container}>
            <ParcelManager text={'Send parcel'} icon={<PackagingArrowUp />} path={'/send-parcel'} />
            <ParcelManager text={'Deliver parcel'} icon={<Delivery />} path={'/deliver-parcel'} />
        </section>
    );
};
