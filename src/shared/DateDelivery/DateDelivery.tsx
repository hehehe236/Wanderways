import { DateStr } from '@/shared/DateStr/DateStr.tsx';
import { IconArrowRight } from '@/shared/svg/IconArrowRight.tsx';
import cls from './DateDelivery.module.css';

export type DateDeliveryProps = {
    shippingDate?: string;
    deliveryDate?: string;
};

export const DateDelivery = ({ shippingDate, deliveryDate }: DateDeliveryProps) => {
    if (!shippingDate || !deliveryDate) return null;

    return (
        <div className={cls.container}>
            <DateStr date={shippingDate} size='body2_font_bold' color='primary' />
            <IconArrowRight addStyle={cls.icon} />
            <DateStr date={deliveryDate} size='body2_font_bold' color='primary' />
        </div>
    );
};
