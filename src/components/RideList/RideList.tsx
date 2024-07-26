import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import cls from './RideList.module.css';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { RideListProps } from '@/components/RideList/type.ts';
import useListHeight from '@/hooks/useListHeight.ts';
import { RideGeneralInfo } from '@/components/RideGeneralInfo/RideGeneralInfo.tsx';

import { useGetRidesQuery } from '@/store/services/rideService.ts';

export const RideList = () => {
    const { data, isLoading } = useGetRidesQuery({});

    const { listRef, listHeight } = useListHeight(data);

    if (isLoading) return <Loader />;

    return (
        <SimpleBar style={{ maxHeight: listHeight }}>
            <ul className={cls.container} ref={listRef}>
                {data?.map(
                    ({
                        driverId,
                        departureAddress,
                        arrivalAddress,
                        status,
                         totalCost,
                         parcelsTypes,
                    }: RideListProps) => (
                        <li key={driverId}>
                            <RideGeneralInfo
                                driverId={driverId}
                                departureAddress={departureAddress}
                                arrivalAddress={arrivalAddress}
                                totalCost={totalCost}
                                type={`${parcelsTypes?.join(', ')}`}
                            >
                                <Tag text={status} background={status} />
                            </RideGeneralInfo>
                        </li>
                    )
                )}
            </ul>
        </SimpleBar>
    );
};
