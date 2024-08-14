import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector } from 'react-redux';

import cls from './ParselList.module.css';
import { Loader } from '@/shared/Loader/Loader.tsx';
import useListHeight from '@/hooks/useListHeight.ts';
import { ParcelGeneralInfo } from '@/components/ParcelGeneralInfo/ParcelGeneralInfo.tsx';
import { ParcelGeneralInfoType } from '@/store/features/parcel/types.ts';

import { useGetParcelsQuery } from '@/store/services/parcelService.ts';
import { selectParcels } from '@/store/features/parcel/parcelSlice.ts';

export const ParcelList = () => {
    const { data, isLoading } = useGetParcelsQuery({});
    const parcels: ParcelGeneralInfoType[] = useSelector(selectParcels);

    const { listRef, listHeight } = useListHeight(data);

    if (isLoading) return <Loader />;

    return (
        <SimpleBar style={{ maxHeight: listHeight }}>
            <ul className={cls.container} ref={listRef} data-testid='parcels-list'>
                {parcels.map(({ parcelId }: ParcelGeneralInfoType) => (
                    <li key={parcelId}>
                        <ParcelGeneralInfo parcelId={parcelId} />
                    </li>
                ))}
            </ul>
        </SimpleBar>
    );
};
