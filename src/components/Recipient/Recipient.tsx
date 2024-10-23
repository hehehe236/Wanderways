import { useState } from 'react';

import cls from './Recipient.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconArrow2Down } from '@/shared/svg/IconArrow2Down.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import { ContactInfo } from '@/shared/ContactInfo/ContactInfo.tsx';
import { Recipient as RecipientType } from '@/store/features/ride/types.ts';

export const Recipient = (props: RecipientType) => {
    const { name, lastName, phoneNumber } = props;
    const [isOpenRecipient, setIsOpenRecipient] = useState(false);

    const handleClickRecipient = () => setIsOpenRecipient(!isOpenRecipient);

    return (
        <>
            <div
                className={cls.container_title}
                onClick={handleClickRecipient}
                data-testid='recipient'
            >
                <Text size='headline2_bold' color='primary'>
                    Recipient
                </Text>
                <Button type='button' variant='icon' className={cls.button}>
                    {isOpenRecipient ? <IconArrow2Down /> : <IconArrow2Right />}
                </Button>
            </div>
            {isOpenRecipient && (
                <ContactInfo name={`${name} ${lastName}`} phone={`${phoneNumber}`} />
            )}
        </>
    );
};
