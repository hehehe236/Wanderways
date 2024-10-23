import cls from './RideRouteDetails.module.css';
import { DateDelivery } from '@/shared/DateDelivery/DateDelivery.tsx';
import { RouteDelivery } from '@/shared/RouteDelivery/RouteDelivery.tsx';
import { Address } from '@/store/features/ride/types.ts';

export type RideRouteDetailsProps = {
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate?: string;
    arrivalDate?: string;
};

export const RideRouteDetails = (props: RideRouteDetailsProps) => {
    const { departureAddress, arrivalAddress, departureDate, arrivalDate } = props;

    return (
        <>
            <div className={cls.container} data-testid='rideRouteDetails'>
                <ul className={cls.list}>
                    <li>
                        <RouteDelivery
                            city={departureAddress.city}
                            street={departureAddress.street}
                        />
                    </li>
                    <li className={cls.line} />
                    <li>
                        <RouteDelivery city={arrivalAddress.city} street={arrivalAddress.street} />
                    </li>
                </ul>
            </div>
            <DateDelivery shippingDate={departureDate} deliveryDate={arrivalDate} />
        </>
    );
};
