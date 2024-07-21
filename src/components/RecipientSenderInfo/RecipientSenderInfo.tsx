import { useState } from 'react';

import cls from './RecipientSenderInfo.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Arrow2Right } from '@/shared/svg/Arrow2Right.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { RecepientInfo } from '@/shared/RecepientInfo/RecepientInfo.tsx';
import { Arrow2Down } from '@/shared/svg/Arrow2Down.tsx';

export type RecipientSenderInfoProps = {
    nameRecipient: string
    phoneRecipient: string
    nameSender: string
    phoneSender: string
}

export const RecipientSenderInfo = (props: RecipientSenderInfoProps) => {
    const {nameRecipient, phoneRecipient, nameSender, phoneSender} = props;
    const [isOpenRecipient, setIsOpenRecipient] = useState(false);
    const [isOpenSender, setIsOpenSender] = useState(false);

    const handleClickRecipient = () => setIsOpenRecipient(!isOpenRecipient);
    const handleClickSender = () => setIsOpenSender(!isOpenSender);

    return (
        <section className={cls.section}>
            <div className={cls.container_title}>
                <Text size={'headline2_bold'} color={'primary'}>Recipient</Text>
                <Button type={'button'} variant={'icon'} className={cls.button} onClick={handleClickRecipient}>
                    {isOpenRecipient ? <Arrow2Down /> : <Arrow2Right />}
                </Button>
            </div>
            {isOpenRecipient && <RecepientInfo variant={'Recipient'} name={nameRecipient} phone={phoneRecipient}/>}
            <div className={cls.line}/>
            <div className={cls.container_title}>
                <Text size={'headline2_bold'} color={'primary'}>Sender</Text>
                <Button type={'button'} variant={'icon'} className={cls.button} onClick={handleClickSender}>
                    {isOpenSender ? <Arrow2Down /> : <Arrow2Right />}
                </Button>
            </div>
            {isOpenSender && <RecepientInfo variant={'Sender'} name={nameSender} phone={phoneSender}/>}
        </section>
    );
}