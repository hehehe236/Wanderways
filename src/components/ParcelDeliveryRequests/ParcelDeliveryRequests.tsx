import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import cls from './ParcelDeliveryRequests.module.css';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { RideSwitcher, selectValueRideSwitcher } from '@/store/features/switchersSlice.ts';
import { ParcelCard } from '@/shared/ParcelCard/ParcelCard.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconClose } from '@/shared/svg/IconClose.tsx';
import { Text } from '@/shared/Text/Text.tsx';

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
                            actionNode={
                                <div className={cls.block_btn} data-testid='rideBlockBtn'>
                                    <Button background='red' variant='cancel'>
                                        <IconClose addStyle={cls.icon_close} />
                                    </Button>
                                    {rideSwitcher === 'From Senders' && (
                                        <Button
                                            background='primary'
                                            size='confirm'
                                            variant='confirm'
                                        >
                                            <Text size='body2_font_bold' color='white'>
                                                Approve
                                            </Text>
                                        </Button>
                                    )}
                                </div>
                            }
                        />
                    </li>
                )
            )}
        </ul>
    );
};
