import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import cls from './RideParcelRequests.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Switcher } from '@/shared/Switcher/Switcher.tsx';
import { ParcelDeliveryRequests } from '@/components/ParcelDeliveryRequests/ParcelDeliveryRequests.tsx';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import {
    RideSwitcher,
    selectRideSwitcherValue,
    setRideSwitcherValue,
} from '@/store/features/switchersSlice.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';

const RideParcelRequests = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const ride: RideType | undefined = useSelector((state: { ride: RideType[] }) =>
        selectRideById(state, Number(id))
    );
    if (!ride) return null;

    const rideSwitcher = useSelector(selectRideSwitcherValue);
    const dispatch = useAppDispatch();
    const handleClick = (rideSwitcherValue: RideSwitcher) =>
        dispatch(setRideSwitcherValue(rideSwitcherValue));

    return (
        <main className={cls.container}>
            <ArrowBack />
            <ul className={cls.list}>
                <li>
                    <div className={cls.item}>
                        <div className={cls.container_text}>
                            <Text size='headline1_bold' variant='left' data-testid='titleRequest'>
                                {t('ride.requestedParcels')}
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
                        leftTitle={t('ride.leftTitle')}
                        rightTitle={t('ride.rightTitle')}
                        handleClick={handleClick}
                        switcherType={rideSwitcher}
                    />
                </li>
                <li>
                    <ParcelDeliveryRequests />
                </li>
            </ul>
        </main>
    );
};

export default RideParcelRequests;
