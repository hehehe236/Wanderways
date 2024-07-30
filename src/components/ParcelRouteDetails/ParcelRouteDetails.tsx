import { useSelector } from 'react-redux';

import cls from './ParcelRouteDetails.module.css';
import { DateDelivery } from '@/shared/DateDelivery/DateDelivery.tsx';
import { RouteDelivery } from '@/shared/RouteDelivery/RouteDelivery.tsx';
import { useLocation } from 'react-router-dom';
import { Parcel } from '@/store/features/parcel/types.ts';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';

export const ParcelRouteDetails = () => {
    const {state: parcelId} = useLocation();
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );

    if (!parcel) return null;

    return (
        <>
            <div className={cls.container}>
                <ul className={cls.list}>
                    <li>
                        <RouteDelivery city={parcel.shippingAddress.city} street={parcel.shippingAddress.street}/>
                    </li>
                    <li className={cls.line}/>
                    <li>
                        <RouteDelivery city={parcel.deliveryAddress.city} street={parcel.deliveryAddress.street}/>
                    </li>
                </ul>
            </div>
            <DateDelivery
                shippingDate={parcel.shippingDate}
                deliveryDate={parcel.deliveryDate}
            />
        </>
    );
};
