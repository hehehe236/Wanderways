import { useSelector } from 'react-redux';

import cls from './AvailableDriversRoute.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import { Parcel } from '@/store/features/parcel/types.ts';
import { Ride } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';

export type AvailableDriversRouteProps = {
    parcelId: number;
    rideId: number;
};

export const AvailableDriversRoute = (props: AvailableDriversRouteProps) => {
    const { parcelId, rideId } = props;
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );
    const ride: Ride | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideById(state, rideId)
    );

    return (
        <div className={cls.container} data-testid='availableDriversRoute'>
            <div className={cls.container_dot}>
                <div className={cls.dot} />
                <div className={cls.line} />
                <div className={cls.dot} />
            </div>
            <div className={cls.city}>
                <Text size='headline2_bold' color='primary'>
                    {parcel?.deliveryAddress.city || ride?.departureAddress.city}
                </Text>
                <Text size='headline2_bold' color='primary'>
                    {parcel?.shippingAddress.city || ride?.arrivalAddress.city}
                </Text>
            </div>
            <div className={cls.city}>
                <Text size='body4_font_bold' color='secondary'>
                    {parcel?.deliveryAddress.street || ride?.departureAddress.street}
                </Text>
                <Text size='body4_font_bold' color='secondary'>
                    {parcel?.shippingAddress.street || ride?.arrivalAddress.street}
                </Text>
            </div>
        </div>
    );
};
