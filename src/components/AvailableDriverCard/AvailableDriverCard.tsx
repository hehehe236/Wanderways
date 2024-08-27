import cls from './AvailableDriverCard.module.css';
import { CityAndDate } from '@/shared/CityAndDate/CityAndDate.tsx';
import { IconArrowRight } from '@/shared/svg/IconArrowRight.tsx';
import { Rider } from '@/components/AvailableDriverCard/types.ts';
import { AvailableCarrier } from '@/components/AvailableCarrier/AvailableCarrier.tsx';

export const AvailableDriverCard = ({ rider }: { rider: Partial<Rider> }) => {
    const {
        arrivalAddress,
        arrivalDate,
        departureAddress,
        departureDate,
        drivingExperience,
        vehicles,
        name,
        lastName,
    } = rider;

    return (
        <>
            <div className={cls.container_transit}>
                <CityAndDate city={departureAddress?.city} date={departureDate} />
                <IconArrowRight addStyle={cls.icon_arrow} />
                <CityAndDate city={arrivalAddress?.city} date={arrivalDate} />
            </div>
            <AvailableCarrier
                name={name}
                lastName={lastName}
                drivingExperience={drivingExperience}
                vehicles={vehicles?.model}
            />
        </>
    );
};
