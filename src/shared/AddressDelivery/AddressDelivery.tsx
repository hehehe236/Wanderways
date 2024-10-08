import cls from './AddressDelivery.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrowRight } from '@/shared/svg/IconArrowRight.tsx';
import { changeStyleForStatusNew } from '@/utils/changeStyleForStatusNew.ts';
import { Parcel } from '@/store/features/parcel/types.ts';
import { Ride } from '@/store/features/ride/types.ts';

export type AddressDeliveryProps = {
    status?: Parcel | Ride;
    shippingAddress: string;
    deliveryAddress: string;
    font: 'body1_font_bold' | 'body4_font_bold';
    color: 'primary' | 'secondary';
};

export const AddressDelivery = ({
    status,
    shippingAddress,
    deliveryAddress,
    font,
    color,
}: AddressDeliveryProps) => {
    return (
        <div className={cls.address}>
            <Text
                size={font}
                color={color}
                variant='left'
                className={status ? changeStyleForStatusNew(status, '', cls.color_new) : ''}
            >
                {shippingAddress}
            </Text>
            <IconArrowRight
                addStyle={
                    status
                        ? changeStyleForStatusNew(status, cls.arrow_icon, cls.stroke_new)
                        : cls.arrow_icon
                }
            />
            <Text
                size={font}
                color={color}
                variant='left'
                className={status ? changeStyleForStatusNew(status, '', cls.color_new) : ''}
            >
                {deliveryAddress}
            </Text>
        </div>
    );
};
