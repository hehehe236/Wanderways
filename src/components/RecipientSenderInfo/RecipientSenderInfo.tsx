import { useState } from 'react';

import cls from './RecipientSenderInfo.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { RecepientInfo } from '@/shared/RecepientInfo/RecepientInfo.tsx';
import { IconArrow2Down } from '@/shared/svg/IconArrow2Down.tsx';

export type RecipientSenderInfoProps = {
    nameRecipient: string;
    phoneRecipient: string;
    nameSender: string;
    phoneSender: string;
    variant: 'parcel' | 'ride';
};

export const RecipientSenderInfo = (props: RecipientSenderInfoProps) => {
    const { nameRecipient, phoneRecipient, nameSender, phoneSender, variant } = props;
    const [isOpenRecipient, setIsOpenRecipient] = useState(false);
    const [isOpenSender, setIsOpenSender] = useState(false);

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
                <RecepientInfo variant={'Recipient'} name={nameRecipient} phone={phoneRecipient} />
            )}
            {variant === 'ride' && (
                <>
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
                        <RecepientInfo variant={'Sender'} name={nameSender} phone={phoneSender} />
                    )}
                </>
            )}
        </>
    );
};
