import cls from './AddressDelivery.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrowRight } from '@/shared/svg/IconArrowRight.tsx';

export type AddressDeliveryProps = {
    shippingAddress: string;
    deliveryAddress: string;
};

export const AddressDelivery = ({ shippingAddress, deliveryAddress }: AddressDeliveryProps) => {
    return (
        <div className={cls.address}>
            <Text size='body1_font_bold' color='primary' variant='left'>
                {shippingAddress}
            </Text>
            <IconArrowRight addStyle={cls.arrow_icon} />
            <Text size='body1_font_bold' color='primary' variant='left'>
                {deliveryAddress}
            </Text>
        </div>
    );
};
