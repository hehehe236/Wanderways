import { useLocation } from 'react-router-dom';

import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import cls from './AvailableDrivers.module.css';
import { AvailableDriversCount } from '@/components/AvailableDriversCount/AvailableDriversCount.tsx';
import { AvailableDriversTransit } from '@/components/AvailableDriversTransit/AvailableDriversTransit.tsx';
import { AvailableDriverCard } from '@/components/AvailableDriverCard/AvailableDriverCard.tsx';
import { useGetAvailableRidesQuery } from '@/store/services/rideService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Rider } from '@/components/AvailableDriverCard/types.ts';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';

const AvailableDrivers = () => {
    const { state: parcelId } = useLocation();
    const { data: availableRides, isLoading } = useGetAvailableRidesQuery({});

    if (isLoading) return <Loader />;

    return (
        <main className={cls.container}>
            <ArrowBack />
            <AvailableDriversCount countDrivers={availableRides.length} />
            <AvailableDriversTransit parcelId={parcelId} />
            <ul className={cls.container_list} data-testid='availableDriversList'>
                {availableRides.map(({ driverId, ...ride }: Rider) => {
                    return (
                        <li key={driverId}>
                            <BasisBlock>
                                <AvailableDriverCard rider={ride} />
                            </BasisBlock>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default AvailableDrivers;
