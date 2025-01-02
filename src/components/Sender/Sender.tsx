import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Sender.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconArrow2Down } from '@/shared/svg/IconArrow2Down.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import { ContactInfo } from '@/shared/ContactInfo/ContactInfo.tsx';
import { Sender as SenderType } from '@/store/features/ride/types.ts';

export const Sender = (props: SenderType) => {
    const { t } = useTranslation();
    const { name, lastName, phoneNumber } = props;
    const [isOpenSender, setIsOpenSender] = useState(false);

    const handleClickSender = () => setIsOpenSender(!isOpenSender);

    return (
        <>
            <div className={cls.container_title} onClick={handleClickSender} data-testid='sender'>
                <Text size='headline2_bold' color='primary'>
                    {t('ride.sender')}
                </Text>
                <Button type='button' variant='icon' className={cls.button}>
                    {isOpenSender ? <IconArrow2Down /> : <IconArrow2Right />}
                </Button>
            </div>
            {isOpenSender && <ContactInfo name={`${name} ${lastName}`} phone={`${phoneNumber}`} />}
        </>
    );
};
