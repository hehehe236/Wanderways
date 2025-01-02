import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from '@/pages/AvailableDrivers/AvailableDrivers.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { AvailableDriversCount } from '@/components/AvailableDriversCount/AvailableDriversCount.tsx';
import { AvailableDriversRoute } from '@/components/AvailableDriversTransit/AvailableDriversRoute.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { useGetAvailableParcelsQuery } from '@/store/services/parcelService.ts';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { AvailableParcelCard } from '@/components/AvailableParcelCard/AvailableParcelCard.tsx';
import { Parcel } from '@/components/AvailableParcelCard/types.ts';

const AvailableParcels = () => {
    const { t } = useTranslation();
    const { state: rideId } = useLocation();
    const { data: availableParcels, isLoading } = useGetAvailableParcelsQuery({});

    if (isLoading) return <Loader />;

    return (
        <main className={cls.container}>
            <ArrowBack />
            <AvailableDriversCount
                countDrivers={availableParcels.length}
                title={t('availableParcels.title')}
            />
            <AvailableDriversRoute parcelId={0} rideId={rideId} />
            <ul className={cls.container_list} data-testid='availableParcelsList'>
                {availableParcels.map(({ parcelId, ...parcel }: Parcel) => {
                    return (
                        <li key={parcelId}>
                            <BasisBlock>
                                <AvailableParcelCard parcel={parcel} />
                            </BasisBlock>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default AvailableParcels;
