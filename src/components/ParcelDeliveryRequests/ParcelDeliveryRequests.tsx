import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import cls from './ParcelDeliveryRequests.module.css';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { selectVisibleSendersList } from '@/store/features/optionSlice.ts';
import { getDeliveryRequests } from '@/utils/db/getDeliveryRequests.ts';
import { ParcelCard } from '@/shared/ParcelCard/ParcelCard.tsx';

export const ParcelDeliveryRequests = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const isRequested = pathname.endsWith('requested');

    const ride: RideType | undefined = useSelector((state: { ride: RideType[] }) =>
        selectRideById(state, Number(id))
    );
    if (!ride) return null;

    const isVisibleSendersList = useSelector(selectVisibleSendersList);
    const data = getDeliveryRequests(ride, isVisibleSendersList, isRequested);

    if (!data) return null;

    return (
        <ul className={cls.container} data-testid='deliveryRequests'>
            {data.map(
                ({
                    parcelId,
                    type,
                    details,
                    cost,
                    deliveryDate,
                    deliveryAddress,
                    shippingDate,
                    shippingAddress,
                }) => (
                    <li key={parcelId}>
                        <ParcelCard
                            type={type}
                            details={details}
                            cost={cost}
                            btnText='Approve'
                            variant='requested'
                            departureAddress={shippingAddress}
                            arrivalAddress={deliveryAddress}
                            departureDate={shippingDate}
                            arrivalDate={deliveryDate}
                        />
                    </li>
                )
            )}
        </ul>
    );
};
