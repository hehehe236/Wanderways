import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import cls from './AvailableDrivers.module.css';
import { AvailableDriversCount } from '@/components/AvailableDriversCount/AvailableDriversCount.tsx';
import { AvailableDriversRoute } from '@/components/AvailableDriversTransit/AvailableDriversRoute.tsx';
import { AvailableDriverCard } from '@/components/AvailableDriverCard/AvailableDriverCard.tsx';
import { useGetAvailableRidesQuery } from '@/store/services/rideService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Rider } from '@/components/AvailableDriverCard/types.ts';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';

const AvailableDrivers = () => {
    const { t } = useTranslation();
    const { state: parcelId } = useLocation();
    const { data: availableRides, isLoading } = useGetAvailableRidesQuery({});

    if (isLoading) return <Loader />;

    return (
        <main className={cls.container}>
            <ArrowBack />
            <AvailableDriversCount
                countDrivers={availableRides.length}
                title={t('availableDrivers.title')}
            />
            <AvailableDriversRoute parcelId={parcelId} rideId={0} />
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
