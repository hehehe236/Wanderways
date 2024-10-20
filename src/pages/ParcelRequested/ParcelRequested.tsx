import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import cls from './ParcelRequested.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Switcher } from '@/shared/Switcher/Switcher.tsx';
import { ParcelDeliveryRequests } from '@/components/ParcelDeliveryRequests/ParcelDeliveryRequests.tsx';
import { useParams } from 'react-router-dom';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { useSelector } from 'react-redux';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import {
    RideSwitcher,
    selectValueRideSwitcher,
    setValueRideSwitcher,
} from '@/store/features/switchersSlice.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';

const ParcelRequested = () => {
    const { id } = useParams();
    const ride: RideType | undefined = useSelector((state: { ride: RideType[] }) =>
        selectRideById(state, Number(id))
    );
    if (!ride) return null;

    const rideSwitcher = useSelector(selectValueRideSwitcher);
    const dispatch = useAppDispatch();
    const handleClick = (chooseTab: RideSwitcher) => dispatch(setValueRideSwitcher(chooseTab));

    return (
        <main className={cls.container}>
            <ArrowBack />
            <ul className={cls.list}>
                <li>
                    <div className={cls.item}>
                        <div className={cls.container_text}>
                            <Text size='headline1_bold' variant='left' data-testid='titleRequest'>
                                Requested parcels
                            </Text>
                            <div className={cls.container_number}>
                                <Text
                                    size='body3_font_bold'
                                    color='white'
                                    data-testid='countRequest'
                                >
                                    {(ride?.senderRequested?.fromSenders?.length || 0) +
                                        (ride?.senderRequested?.myRequests?.length || 0)}
                                </Text>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <Switcher
                        leftTitle='From Senders'
                        rightTitle='My Requests'
                        handleClick={handleClick}
                        isActiveTab={rideSwitcher}
                    />
                </li>
                <li>
                    <ParcelDeliveryRequests />
                </li>
            </ul>
        </main>
    );
};

export default ParcelRequested;
