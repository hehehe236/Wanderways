import cls from './Address.module.css';
import { AddressDelivery } from '@/shared/AddressDelivery/AddressDelivery.tsx';
import { Address as AddressType } from '@/types/contracts';
import { DateDelivery } from '../DateDelivery/DateDelivery.tsx';

import { useGetAddressQuery } from '@/store/services/parcelService.ts';

export const Address = () => {
    const { data: address, isLoading: isLoadingAddress } = useGetAddressQuery({});

    if (isLoadingAddress) return <div>Loading...</div>;

    return (
        <section className={cls.section}>
            <div className={cls.container}>
                <ul className={cls.list}>
                    {address.map(({ city, street }: AddressType, index: number) => {
                        const isNotLast = index !== address.length - 1;
                        return (
                            <li key={`${street}-${index}`}>
                                <AddressDelivery
                                    city={city}
                                    street={street}
                                    isNotLast={isNotLast}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <DateDelivery
                shippingDate={address[0].shippingDate}
                deliveryDate={address[0].deliveryDate}
            />
        </section>
    );
};
