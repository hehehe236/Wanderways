import { useSelector } from 'react-redux';

import cls from './AcceptedParcelList.module.css'
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { AcceptedParcel } from '@/components/AcceptedParcel/AcceptedParcel.tsx';
import { useLocation } from 'react-router-dom';
import { Ride } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';

export const AcceptedParcelList = () => {
    const {state: rideId} = useLocation();
    const ride: Ride | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideById(state, rideId)
    );
    if (!ride) return null;

    return (
        <ul className={cls.container}>
            {ride.acceptedParcelList?.map(({parcelId}) => {
                return (
                    <li key={parcelId}>
                        <BasisBlock>
                            <AcceptedParcel parcelId={parcelId}/>
                        </BasisBlock>
                    </li>
                )
            })}
        </ul>
    )
}