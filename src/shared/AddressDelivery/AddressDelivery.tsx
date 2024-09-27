import cls from './AddressDelivery.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrowRight } from '@/shared/svg/IconArrowRight.tsx';
import { changeStyleForStatusNew } from '@/utils/changeStyleForStatusNew.ts';
import { Parcel } from '@/store/features/parcel/types.ts';
import { Ride } from '@/store/features/ride/types.ts';

export type AddressDeliveryProps = {
    status: Parcel | Ride;
    shippingAddress: string;
    deliveryAddress: string;
};

export const AddressDelivery = ({
    status,
    shippingAddress,
    deliveryAddress,
}: AddressDeliveryProps) => {
    return (
        <div className={cls.address}>
            <Text
                size='body1_font_bold'
                color='primary'
                variant='left'
                className={changeStyleForStatusNew(status, '', cls.color_new)}
            >
                {shippingAddress}
            </Text>
            <IconArrowRight
                addStyle={changeStyleForStatusNew(status, cls.arrow_icon, cls.stroke_new)}
            />
            <Text
                size='body1_font_bold'
                color='primary'
                variant='left'
                className={changeStyleForStatusNew(status, '', cls.color_new)}
            >
                {deliveryAddress}
            </Text>
        </div>
    );
};
