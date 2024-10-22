import { useSelector } from 'react-redux';

import cls from './AcceptedParcelList.module.css';
import { useLocation } from 'react-router-dom';
import { Ride } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { ParcelCard } from '@/shared/ParcelCard/ParcelCard.tsx';
import { Recipient } from '@/components/Recipient/Recipient.tsx';
import { Sender } from '@/components/Sender/Sender.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';

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
                    sender,
                    recipient,
                }) => {
                    return (
                        <li key={parcelId}>
                            <ParcelCard
                                type={type}
                                details={details}
                                cost={cost}
                                departureAddress={departureAddress}
                                arrivalAddress={arrivalAddress}
                                departureDate={departureDate}
                                arrivalDate={arrivalDate}
                                recipient={
                                    recipient === null ? null : (
                                        <Recipient
                                            name={recipient.name}
                                            lastName={recipient.lastName}
                                            phoneNumber={recipient.phoneNumber}
                                        />
                                    )
                                }
                                sender={
                                    sender === null ? null : (
                                        <Sender
                                            name={sender.name}
                                            lastName={sender.lastName}
                                            phoneNumber={sender.phoneNumber}
                                        />
                                    )
                                }
                                actionNode={
                                    <Button background='primary' size='confirm' variant='confirm'>
                                        <Text size='body2_font_bold' color='white'>
                                            Confirm delivery
                                        </Text>
                                    </Button>
                                }
                            />
                        </li>
                    );
                }
            )}
        </ul>
    );
};
