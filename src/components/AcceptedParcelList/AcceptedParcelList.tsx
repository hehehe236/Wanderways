import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import cls from './AcceptedParcelList.module.css';
import { Ride } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { ParcelCard } from '@/shared/ParcelCard/ParcelCard.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import notification from '@/utils/NotificationManager.ts';

export const AcceptedParcelList = () => {
    const { t } = useTranslation();
    const { state: rideId } = useLocation();
    const ride: Ride | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideById(state, rideId)
    );
    if (!ride) return null;

    const handleClickConfirmDelivery = () =>
        notification.showSuccess('Confirmation email sent to recipient and sender emails');

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
                                recipient={recipient}
                                sender={sender}
                                actionNode={
                                    <Button
                                        background='primary'
                                        size='confirm'
                                        variant='confirm'
                                        onClick={handleClickConfirmDelivery}
                                    >
                                        <Text size='body2_font_bold' color='white'>
                                            {t('ride.btnConfirmDelivery')}
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
