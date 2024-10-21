import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import cls from './ParcelDeliveryRequests.module.css';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { RideSwitcher, selectValueRideSwitcher } from '@/store/features/switchersSlice.ts';
import { ParcelCard } from '@/shared/ParcelCard/ParcelCard.tsx';
import { RidesBlockBtn } from '@/components/RidesBlockBtn/RidesBlockBtn.tsx';

export const ParcelDeliveryRequests = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const isRequested = pathname.endsWith('requested');

    const ride: RideType | undefined = useSelector((state: { ride: RideType[] }) =>
        selectRideById(state, Number(id))
    );
    if (!ride) return null;

    const rideSwitcher = useSelector(selectValueRideSwitcher);
    const data = getDeliveryRequests(ride, rideSwitcher, isRequested);

    if (!data) return null;

    function getDeliveryRequests(ride: RideType, rideSwitcher: RideSwitcher, isRequested: boolean) {
        const { fromSenders, myRequests } = ride?.senderRequested || {};

        if (rideSwitcher === 'From Senders') {
            return isRequested ? fromSenders : fromSenders?.slice(0, 1);
        } else {
            return isRequested ? myRequests : myRequests?.slice(0, 1);
        }
    }

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
                            departureAddress={shippingAddress}
                            arrivalAddress={deliveryAddress}
                            departureDate={shippingDate}
                            arrivalDate={deliveryDate}
                            actionNode={<RidesBlockBtn />}
                        />
                    </li>
                )
            )}
        </ul>
    );
};
