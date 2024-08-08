import { useSelector } from 'react-redux';

import cls from './RideRouteDetails.module.css';
import { DateDelivery } from '@/shared/DateDelivery/DateDelivery.tsx';
import { RouteDelivery } from '@/shared/RouteDelivery/RouteDelivery.tsx';
import { useLocation } from 'react-router-dom';
import { selectRideAcceptedParcels } from '@/store/features/ride/rideSlice.ts';
import { Ride, RideAcceptedParcels } from '@/store/features/ride/types.ts';

export const RideRouteDetails = ({ parcelId }: { parcelId: number }) => {
    const { state: rideId } = useLocation();
    const acceptedParcel: RideAcceptedParcels | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideAcceptedParcels(state, rideId, parcelId)
    );
    if (!acceptedParcel) return null;

    return (
        <>
            <div className={cls.container}>
                <ul className={cls.list}>
                    <li>
                        <RouteDelivery
                            city={acceptedParcel.departureAddress.city}
                            street={acceptedParcel.departureAddress.street}
                        />
                    </li>
                    <li className={cls.line} />
                    <li>
                        <RouteDelivery
                            city={acceptedParcel.arrivalAddress.city}
                            street={acceptedParcel.arrivalAddress.street}
                        />
                    </li>
                </ul>
            </div>
            <DateDelivery
                shippingDate={acceptedParcel.departureDate}
                deliveryDate={acceptedParcel.arrivalDate}
            />
        </>
    );
};
