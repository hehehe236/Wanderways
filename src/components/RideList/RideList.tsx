import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { Loader } from '@/shared/Loader/Loader.tsx';
import { Ride } from '@/components/Ride/Ride.tsx';
import { RideProps } from '@/components/Ride/types.ts';
import cls from './RideList.module.css';

import { useGetRidesQuery } from '@/store/services/parcelService.ts';

export const RideList = () => {
    const { data, isLoading} = useGetRidesQuery({});

    if (isLoading) return <Loader/>;

    return (
        <SimpleBar style={{ maxHeight: 500 }}>
            <ul className={cls.container}>
                {data?.map(({driverId, details, departureAddress, arrivalAddress, cost, status}: RideProps) => (
                    <li key={driverId}>
                        <Ride
                            details={details}
                            departureAddress={departureAddress}
                            arrivalAddress={arrivalAddress}
                            cost={cost}
                            status={status}
                        />
                    </li>
                ))}
            </ul>
        </SimpleBar>
    )
}