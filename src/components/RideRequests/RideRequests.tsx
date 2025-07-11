import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import cls from './RideRequests.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { ParcelDeliveryRequests } from '@/components/ParcelDeliveryRequests/ParcelDeliveryRequests.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import {
    RideSwitcher,
    selectRideSwitcherValue,
    setRideSwitcherValue,
} from '@/store/features/switchersSlice.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { Switcher } from '@/shared/Switcher/Switcher.tsx';

export const RideRequests = () => {
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
        <ul className={cls.list}>
            <li>
                <div className={cls.container}>
                    <div className={cls.container_text}>
                        <Text size='headline1_bold' variant='left' data-testid='titleRequest'>
                            {t('ride.requestedParcels')}
                        </Text>
                        <div className={cls.container_number}>
                            <Text size='body3_font_bold' color='white' data-testid='countRequest'>
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
            <li>
                <Link to='requested' data-testid='btnViewAll'>
                    <Button type='button' size='submit' background='secondary' variant='submit'>
                        <Text size='body2_font_bold' color='blue'>
                            {t('ride.viewAll')}
                        </Text>
                    </Button>
                </Link>
            </li>
        </ul>
    );
};
