import cls from './AcceptedParcel.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { useLocation } from 'react-router-dom';
import { Ride, RideAcceptedParcels } from '@/store/features/ride/types.ts';
import { useSelector } from 'react-redux';
import { selectRideAcceptedParcels } from '@/store/features/ride/rideSlice.ts';
import { RideRouteDetails } from '@/components/RideRouteDetails/RideRouteDetails.tsx';
import { RideRecipientSender } from '@/components/RideRecipientSender/RideRecipientSender.tsx';

export const AcceptedParcel = ({ parcelId }: { parcelId: number }) => {
    const { state: rideId } = useLocation();
    const acceptedParcel: RideAcceptedParcels | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideAcceptedParcels(state, rideId, parcelId)
    );
    if (!acceptedParcel) return null;

    return (
        <ul className={cls.container}>
            <li className={cls.container_type}>
                <IconParcelFilled addStyle={cls.icon_parcel} />
                <Text size={'body1_font_bold'} color={'primary'}>
                    {acceptedParcel.type}
                </Text>
            </li>
            <li>
                <Text size={'body4_font_bold'} color={'secondary'}>
                    {acceptedParcel.details}
                </Text>
            </li>
            <li>
                <RideRouteDetails parcelId={parcelId} />
            </li>
            <li>
                <RideRecipientSender parcelId={parcelId} />
            </li>
            <li className={cls.submit_delivery}>
                <div className={cls.container_price}>
                    <div className={cls.price}>
                        <IconHgryvnia addStyle={cls.icon_hgryvnia} />
                        <Text size={'body2_font_bold'} color={'primary'}>
                            {acceptedParcel.cost}
                        </Text>
                    </div>
                    <Text size={'body4_font_bold'} color={'secondary'}>
                        Price
                    </Text>
                </div>
                <Button variant={'submit'} background={'primary'}>
                    <Text size={'body2_font_bold'} color={'white'}>
                        Confirm delivery
                    </Text>
                </Button>
            </li>
        </ul>
    );
};
