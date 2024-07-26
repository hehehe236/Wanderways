import { useParams } from 'react-router-dom';

import cls from '@/pages/Ride/Ride.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { RouteDetails } from '@/components/RouteDetails/RouteDetails.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { AcceptedParcelList } from '@/components/AcceptedParcelList/AcceptedParcelList.tsx';

import { useGetRideAcceptedParcelsQuery, useGetRideByIdQuery } from '@/store/services/rideService.ts';
import { RideDetailsInfo } from '@/components/RideDetailsInfo/RideDetailsInfo.tsx';

const Ride = () => {
    const {id} = useParams();
    const {data: rideGeneralInfo, isLoading: isLoadingGeneralInfo} = useGetRideByIdQuery(id, {skip: !id});
    const {data: rideAdditionalInfo, isLoading: isLoadingAdditionalInfo} = useGetRideAcceptedParcelsQuery(id, {skip: !id});

    if (isLoadingGeneralInfo || isLoadingAdditionalInfo) return <Loader/>;

    return (
        <main className={cls.container}>
            <ArrowBack/>
            <RideDetailsInfo
                type={String(rideAdditionalInfo.length)}
                status={rideGeneralInfo.status}
                totalCost={rideGeneralInfo.totalCost}
            />
            <ul className={cls.container_list}>
                <li>
                    <BasisBlock>
                        <RouteDetails
                            shipStreet={rideGeneralInfo.departureAddress.street}
                            shipCity={rideGeneralInfo.departureAddress.city}
                            delivStreet={rideGeneralInfo.arrivalAddress.street}
                            delivCity={rideGeneralInfo.arrivalAddress.city}
                            shippingDate={rideGeneralInfo.departureDate}
                            deliveryDate={rideGeneralInfo.arrivalDate}
                        />
                    </BasisBlock>
                </li>
                {rideAdditionalInfo.length !== 0 && <li>
                    <Text size={'headline1_bold'} variant={'left'} color={'primary'}>Accepted parcels</Text>
                </li>}
                <li>
                    <AcceptedParcelList
                        shipStreet={rideGeneralInfo.departureAddress.street}
                        shipCity={rideGeneralInfo.departureAddress.city}
                        delivStreet={rideGeneralInfo.arrivalAddress.street}
                        delivCity={rideGeneralInfo.arrivalAddress.city}
                        shippingDate={rideGeneralInfo.departureDate}
                        deliveryDate={rideGeneralInfo.arrivalDate}
                        acceptedParcels={rideAdditionalInfo}
                    />
                </li>
            </ul>
        </main>
    );
};
export default Ride;