import { useSelector } from 'react-redux';

import cls from './ParcelDetailsInfo.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { IconDot } from '@/shared/svg/IconDot.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { useLocation } from 'react-router-dom';
import { Parcel } from '@/store/features/parcel/types.ts';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';

export const ParcelDetailsInfo = () => {
    const { state: parcelId } = useLocation();
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );

    if (!parcel) return null;

    return (
        <section className={cls.container}>
            <div className={cls.container_icon}>
                <IconParcelFilled addStyle={cls.icon} />
            </div>
            <div className={cls.container_text}>
                <Text variant={'left'} size={'headline1_bold'} color={'primary'}>
                    {parcel.type}
                </Text>
                <div className={cls.container_status}>
                    <Tag text={parcel.status} background={parcel.status} />
                    <IconDot addStyle={cls.icon_dot} />
                    <div className={cls.container_price}>
                        <IconHgryvnia addStyle={cls.icon_hryvnia} />
                        <Text variant={'left'} size={'body2_font_bold'} color={'secondary'}>
                            {parcel.cost}
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    );
};
