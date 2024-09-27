import { useSelector } from 'react-redux';

import cls from './RideDetailsInfo.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { IconDot } from '@/shared/svg/IconDot.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { useLocation } from 'react-router-dom';
import { Ride } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { getTypeParcel } from '@/utils/getTypeParcel.ts';

export const RideDetailsInfo = () => {
    const { state: rideId } = useLocation();

    const ride: Ride | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideById(state, rideId)
    );
    if (!ride) return null;

    const nameTypes = getTypeParcel(ride.parcelsTypes.length);

    return (
        <section className={cls.container} id='ride-details-info'>
            <div className={cls.container_icon}>
                <IconParcelFilled addStyle={cls.icon} />
            </div>
            <div className={cls.container_text}>
                <Text variant='left' size='headline1_bold' color='primary'>
                    {nameTypes}
                </Text>
                <div className={cls.container_status}>
                    <Tag text={ride.status} className={cls.tag} />
                    {nameTypes !== 'No parcels' && (
                        <>
                            <IconDot addStyle={cls.icon_dot} />
                            <div className={cls.container_price}>
                                <IconHgryvnia addStyle={cls.icon_hryvnia} />
                                <Text variant='left' size='body2_font_bold' color='secondary'>
                                    {ride.totalCost}
                                </Text>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};
