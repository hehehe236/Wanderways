import { DateStr } from '@/shared/DateStr/DateStr.tsx';
import { ArrowRight } from '@/shared/svg/ArrowRight.tsx';
import cls from './DateDelivery.module.css';

export type DateDeliveryProps = {
    shippingDate: string;
    deliveryDate: string;
}

export const DateDelivery = ({ shippingDate, deliveryDate }: DateDeliveryProps) => {
    return (
        <div className={cls.container}>
            <DateStr date={shippingDate} />
            <ArrowRight addStyle={cls.icon} />
            <DateStr date={deliveryDate} />
        </div>
    );
};
