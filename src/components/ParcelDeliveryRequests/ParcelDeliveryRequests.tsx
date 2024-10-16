import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import cls from './ParcelDeliveryRequests.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { RouteDelivery } from '@/shared/RouteDelivery/RouteDelivery.tsx';
import { DateDelivery } from '@/shared/DateDelivery/DateDelivery.tsx';
import { IconClose } from '@/shared/svg/IconClose.tsx';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { selectVisibleOthersList } from '@/store/features/optionSlice.ts';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { getDeliveryRequests } from '@/utils/db/getDeliveryRequests.ts';

export const ParcelDeliveryRequests = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const isRequested = pathname.endsWith('requested');

    const ride: RideType | undefined = useSelector((state: { ride: RideType[] }) =>
        selectRideById(state, Number(id))
    );
    if (!ride) return null;

    const isVisibleOthersList = useSelector(selectVisibleOthersList);
    const data = getDeliveryRequests(ride, isVisibleOthersList, isRequested);

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
                    <BasisBlock key={parcelId}>
                        <li>
                            <ul className={cls.list_request}>
                                <li className={cls.container_type}>
                                    <IconParcelFilled addStyle={cls.icon_parcel} />
                                    <Text size='body1_font_bold' color='primary'>
                                        {type}
                                    </Text>
                                </li>
                                <li>
                                    <Text size='body4_font_bold' color='secondary'>
                                        {details}
                                    </Text>
                                </li>
                                <li>
                                    <>
                                        <div className={cls.container_details}>
                                            <ul className={cls.list_details}>
                                                <li>
                                                    <RouteDelivery
                                                        city={deliveryAddress?.city}
                                                        street={deliveryAddress?.street}
                                                    />
                                                </li>
                                                <li className={cls.line} />
                                                <li>
                                                    <RouteDelivery
                                                        city={shippingAddress?.city}
                                                        street={shippingAddress?.street}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <DateDelivery
                                            shippingDate={deliveryDate}
                                            deliveryDate={shippingDate}
                                        />
                                    </>
                                </li>
                                <li className={cls.submit_delivery}>
                                    <div className={cls.container_price}>
                                        <div className={cls.price}>
                                            <IconHgryvnia addStyle={cls.icon_hgryvnia} />
                                            <Text size='body2_font_bold' color='primary'>
                                                {cost}
                                            </Text>
                                        </div>
                                        <Text size='body4_font_bold' color='secondary'>
                                            Price
                                        </Text>
                                    </div>
                                    <div className={cls.block_btn}>
                                        <Button background='red' variant='cancel'>
                                            <IconClose addStyle={cls.icon_close} />
                                        </Button>
                                        {isVisibleOthersList && (
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
                                </li>
                            </ul>
                        </li>
                    </BasisBlock>
                )
            )}
        </ul>
    );
};
