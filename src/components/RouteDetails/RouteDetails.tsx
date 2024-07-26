import cls from './RouteDetails.module.css';
import { DateDelivery } from '@/shared/DateDelivery/DateDelivery.tsx';
import { RouteDelivery } from '@/shared/RouteDelivery/RouteDelivery.tsx';

export type RouteDetailsProps = {
    shipStreet: string;
    shipCity: string;
    delivStreet: string;
    delivCity: string;
    shippingDate: string;
    deliveryDate: string;
}

export const RouteDetails = (props :RouteDetailsProps) => {
    const {
        shipStreet,
        shipCity,
        delivCity,
        delivStreet,
        shippingDate,
        deliveryDate,
    } = props;

    return (
        <>
            <div className={cls.container}>
                <ul className={cls.list}>
                    <li>
                        <RouteDelivery city={shipCity} street={shipStreet}/>
                    </li>
                    <li className={cls.line}/>
                    <li>
                        <RouteDelivery city={delivCity} street={delivStreet}/>
                    </li>
                </ul>
            </div>
            <DateDelivery
                shippingDate={shippingDate}
                deliveryDate={deliveryDate}
            />
        </>
    );
};
