import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector } from 'react-redux';

import cls from './RideList.module.css';
import { Loader } from '@/shared/Loader/Loader.tsx';
import useListHeight from '@/hooks/useListHeight.ts';
import { RideGeneralInfo } from '@/components/RideGeneralInfo/RideGeneralInfo.tsx';

import { useGetRidesQuery } from '@/store/services/rideService.ts';
import { RideGeneralInfoType } from '@/store/features/ride/types.ts';
import { selectRides } from '@/store/features/ride/rideSlice.ts';

export const RideList = () => {
    const { data, isLoading } = useGetRidesQuery({});

    const rides: RideGeneralInfoType[] = useSelector(selectRides);

    const { listRef, listHeight } = useListHeight(data);

    if (isLoading) return <Loader />;

    return (
        <SimpleBar style={{ maxHeight: listHeight }}>
            <ul className={cls.container} ref={listRef}>
                {rides.map(({ rideId }: RideGeneralInfoType) => (
                    <li key={rideId}>
                        <RideGeneralInfo rideId={rideId}></RideGeneralInfo>
                    </li>
                ))}
            </ul>
        </SimpleBar>
    );
};
