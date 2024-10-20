import { useSelector } from 'react-redux';

import cls from './AcceptedParcelList.module.css';
import { useLocation } from 'react-router-dom';
import { Ride } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { ParcelCard } from '@/shared/ParcelCard/ParcelCard.tsx';
import { RideRecipientSender } from '@/components/RideRecipientSender/RideRecipientSender.tsx';

export const AcceptedParcelList = () => {
    const { state: rideId } = useLocation();
    const ride: Ride | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideById(state, rideId)
    );
    if (!ride) return null;

    return (
        <ul className={cls.container} id='accepted-parcels'>
            {ride.acceptedParcelList?.map(
                ({
                    parcelId,
                    type,
                    details,
                    cost,
                    departureAddress,
                    arrivalAddress,
                    departureDate,
                    arrivalDate,
                    // sender,
                    // recipient,
                }) => {
                    return (
                        <li key={parcelId}>
                            <ParcelCard
                                type={type}
                                details={details}
                                cost={cost}
                                btnText='Confirm delivery'
                                variant='accepted'
                                departureAddress={departureAddress}
                                arrivalAddress={arrivalAddress}
                                departureDate={departureDate}
                                arrivalDate={arrivalDate}
                            >
                                <RideRecipientSender parcelId={parcelId} />
                            </ParcelCard>
                        </li>
                    );
                }
            )}
        </ul>
    );
};
