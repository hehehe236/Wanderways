import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cls from '@/components/RideGeneralInfo/RideGeneralInfo.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import useElementWidth from '@/hooks/useElementWidth.ts';
import { AddressDelivery } from '@/shared/AddressDelivery/AddressDelivery.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { Ride } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { changeStyleForStatusNew } from '@/utils/changeStyleForStatusNew.ts';

export const RideGeneralInfo = ({ rideId }: { rideId: number }) => {
    const ride: Ride | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideById(state, rideId)
    );
    if (!ride) return null;

    const buttonRef = useElementWidth();

    return (
        <Link to={`/ride/${rideId}`} state={rideId}>
            <button
                className={changeStyleForStatusNew(ride, cls.container, cls.background_new)}
                ref={buttonRef}
            >
                <div className={cls.address_status}>
                    <AddressDelivery
                        color='primary'
                        font='body1_font_bold'
                        status={ride}
                        deliveryAddress={ride.departureAddress.city}
                        shippingAddress={ride.arrivalAddress.city}
                    />
                    <Tag text={ride.status} background={ride.status} text_color={ride.status} />
                </div>
                {ride.totalCost !== 0 && ride.parcelsTypes.length !== 0 && (
                    <div className={cls.product_info}>
                        <div className={cls.container_icon}>
                            <IconParcelFilled addStyle={cls.parcel_icon} />
                        </div>
                        <div className={cls.name_price}>
                            <div className={cls.wrap_text}>
                                <Text size='headline2_bold' color='primary' className={cls.name}>
                                    {ride.parcelsTypes.join(', ')}
                                </Text>
                            </div>
                            <Text size='body4_font_bold' color='secondary' className={cls.price}>
                                <IconHgryvnia addStyle={cls.hgryvnia} /> {ride.totalCost}
                            </Text>
                        </div>
                        <IconArrow2Right addStyle={cls.arrow2right_icon} />
                    </div>
                )}
            </button>
        </Link>
    );
};
