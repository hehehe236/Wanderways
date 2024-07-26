import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import cls from './ParselList.module.css';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { ParcelListProps } from '@/components/ParcelList/type.ts';
import useListHeight from '@/hooks/useListHeight.ts';

import { useGetParcelsQuery } from '@/store/services/parcelService.ts';
import { ParcelGeneralInfo } from '@/components/ParcelGeneralInfo/ParcelGeneralInfo.tsx';

export const ParcelList = () => {
    const { data, isLoading } = useGetParcelsQuery({});

    const { listRef, listHeight } = useListHeight(data);

    if (isLoading) return <Loader />;

    return (
        <SimpleBar style={{ maxHeight: listHeight }}>
            <ul className={cls.container} ref={listRef}>
                {data?.map(
                    ({
                        senderId,
                        type,
                        shippingAddress,
                        deliveryAddress,
                        cost,
                        status,
                    }: ParcelListProps) => (
                        <li key={senderId}>
                            <ParcelGeneralInfo
                                senderId={senderId}
                                type={type}
                                shippingAddress={shippingAddress}
                                deliveryAddress={deliveryAddress}
                                cost={cost}
                            >
                                <Tag text={status} background={status} />
                            </ParcelGeneralInfo>
                        </li>
                    )
                )}
            </ul>
        </SimpleBar>
    );
};
