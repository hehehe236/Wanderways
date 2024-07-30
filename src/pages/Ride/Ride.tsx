import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cls from '@/pages/Ride/Ride.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { AcceptedParcelList } from '@/components/AcceptedParcelList/AcceptedParcelList.tsx';
import { useGetRideAcceptedParcelsQuery, useGetRideByIdQuery } from '@/store/services/rideService.ts';
import { RideDetailsInfo } from '@/components/RideDetailsInfo/RideDetailsInfo.tsx';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { RouteDelivery } from '@/shared/RouteDelivery/RouteDelivery.tsx';
import { DateDelivery } from '@/shared/DateDelivery/DateDelivery.tsx';

const Ride = () => {
    const {id} = useParams();
    const { isLoading: isLoadingGeneralInfo} = useGetRideByIdQuery(id, {skip: !id});
    const { isLoading: isLoadingAdditionalInfo} = useGetRideAcceptedParcelsQuery(id, {skip: !id});

    const ride: RideType | undefined = useSelector((state: { ride: RideType[] }) =>
        selectRideById(state, Number(id))
    );
    if (!ride) return null;

    if (isLoadingGeneralInfo || isLoadingAdditionalInfo) return <Loader/>;

    return (
        <main className={cls.container}>
            <ArrowBack/>
            <RideDetailsInfo />
            <ul className={cls.container_list}>
                <li>
                    <BasisBlock>
                        <div className={cls.container_route}>
                            <ul className={cls.list}>
                                <li>
                                    <RouteDelivery city={ride.departureAddress.city}
                                                   street={ride.departureAddress.street} />
                                </li>
                                <li className={cls.line} />
                                <li>
                                    <RouteDelivery city={ride.arrivalAddress.city}
                                                   street={ride.arrivalAddress.street} />
                                </li>
                            </ul>
                        </div>
                        <DateDelivery
                            shippingDate={ride.departureDate}
                            deliveryDate={ride.arrivalDate}
                        />
                    </BasisBlock>
                </li>
                {ride.acceptedParcelList?.length !== 0 && <li>
                    <Text size={'headline1_bold'} variant={'left'} color={'primary'}>Accepted parcels</Text>
                </li>}
                <li>
                    <AcceptedParcelList />
                </li>
            </ul>
        </main>
    );
};
export default Ride;