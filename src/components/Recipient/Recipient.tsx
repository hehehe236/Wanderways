import { useState } from 'react';

import cls from './Recipient.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconArrow2Down } from '@/shared/svg/IconArrow2Down.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import { useLocation } from 'react-router-dom';
import { Parcel } from '@/store/features/parcel/types.ts';
import { useSelector } from 'react-redux';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import { RecipientInfo } from '@/shared/RecipientInfo/RecipientInfo.tsx';

export const Recipient = () => {
    const [isOpenRecipient, setIsOpenRecipient] = useState(false);
    const { state: parcelId } = useLocation();
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );
    if (!parcel) return null;

    const handleClickRecipient = () => setIsOpenRecipient(!isOpenRecipient);

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
                    name={`${parcel.recipient?.name} ${parcel.recipient?.lastName}`}
                    phone={`${parcel.recipient?.phoneNumber}`}
                />
            )}
        </>
    );
};
