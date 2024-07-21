import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { Parcel } from '@/components/Parcel/Parcel';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { ParcelProps } from '@/components/Parcel/types';
import cls from './ParselList.module.css';

import { useGetParcelsQuery } from '@/store/services/parcelService.ts';

export const ParcelList = () => {
    const { data, isLoading} = useGetParcelsQuery({});

    if (isLoading) return <Loader/>;
    
    return (
        <SimpleBar style={{ maxHeight: 500 }}>
            <ul className={cls.container}>
                {data?.map(({senderId, details, shippingAddress, deliveryAddress, cost, status}: ParcelProps) => (
                    <li key={senderId}>
                        <Parcel
                            senderId={senderId}
                            details={details}
                            shippingAddress={shippingAddress}
                            deliveryAddress={deliveryAddress}
                            cost={cost}
                            status={status}
                        />
                    </li>
                ))}
            </ul>
        </SimpleBar>
    )
}