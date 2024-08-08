import { useState } from 'react';

import cls from './RideRecipientSender.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { RecipientInfo } from '@/shared/RecipientInfo/RecipientInfo.tsx';
import { IconArrow2Down } from '@/shared/svg/IconArrow2Down.tsx';
import { useLocation } from 'react-router-dom';
import { Ride, RideAcceptedParcels } from '@/store/features/ride/types.ts';
import { useSelector } from 'react-redux';
import { selectRideAcceptedParcels } from '@/store/features/ride/rideSlice.ts';

export const RideRecipientSender = ({ parcelId }: { parcelId: number }) => {
    const [isOpenRecipient, setIsOpenRecipient] = useState(false);
    const [isOpenSender, setIsOpenSender] = useState(false);

    const { state: rideId } = useLocation();
    const acceptedParcel: RideAcceptedParcels | undefined = useSelector((state: { ride: Ride[] }) =>
        selectRideAcceptedParcels(state, rideId, parcelId)
    );
    if (!acceptedParcel) return null;

    const handleClickRecipient = () => setIsOpenRecipient(!isOpenRecipient);
    const handleClickSender = () => setIsOpenSender(!isOpenSender);

    return (
        <>
            <div className={cls.container_title}>
                <Text size={'headline2_bold'} color={'primary'}>
                    Recipient
                </Text>
                <Button
                    type={'button'}
                    variant={'icon'}
                    className={cls.button}
                    onClick={handleClickRecipient}
                >
                    {isOpenRecipient ? <IconArrow2Down /> : <IconArrow2Right />}
                </Button>
            </div>
            {isOpenRecipient && (
                <RecipientInfo
                    name={`${acceptedParcel.recipient.name} ${acceptedParcel.recipient.lastName}`}
                    phone={acceptedParcel.recipient.phoneNumber}
                />
            )}
            <div className={cls.line} />
            <div className={cls.container_title}>
                <Text size={'headline2_bold'} color={'primary'}>
                    Sender
                </Text>
                <Button
                    type={'button'}
                    variant={'icon'}
                    className={cls.button}
                    onClick={handleClickSender}
                >
                    {isOpenSender ? <IconArrow2Down /> : <IconArrow2Right />}
                </Button>
            </div>
            {isOpenSender && (
                <RecipientInfo
                    name={`${acceptedParcel.sender.name} ${acceptedParcel.sender.lastName}`}
                    phone={acceptedParcel.sender.phoneNumber}
                />
            )}
        </>
    );
};
