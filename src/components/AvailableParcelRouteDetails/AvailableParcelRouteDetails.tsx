import cls from './AvailableParcelRouteDetails.module.css';
import { RouteDelivery } from '@/shared/RouteDelivery/RouteDelivery.tsx';
import { DateDelivery } from '@/shared/DateDelivery/DateDelivery.tsx';
import { Parcel } from '@/components/AvailableParcelCard/types.ts';

export const AvailableParcelRouteDetails = (props: Partial<Parcel>) => {
    const { arrivalAddress, arrivalDate, departureAddress, departureDate } = props;
    return (
        <>
            <div className={cls.container}>
                <ul className={cls.list}>
                    <li>
                        <RouteDelivery
                            city={departureAddress?.city}
                            street={departureAddress?.street}
                        />
                    </li>
                    <li className={cls.line} />
                    <li>
                        <RouteDelivery
                            city={arrivalAddress?.city}
                            street={arrivalAddress?.street}
                        />
                    </li>
                </ul>
            </div>
            <DateDelivery shippingDate={departureDate} deliveryDate={arrivalDate} />
        </>
    );
};
