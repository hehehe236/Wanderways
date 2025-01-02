import cls from './ContactInfo.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconPhone } from '@/shared/svg/IconPhone.tsx';
import { useTranslation } from 'react-i18next';

export type ContactInfoProps = {
    name: string;
    phone: string;
};

export const ContactInfo = (props: ContactInfoProps) => {
    const { t } = useTranslation();
    const { name, phone } = props;

    return (
        <>
            <div className={cls.name}>
                <Text size='body4_font_bold' color='secondary' className={cls.recipient}>
                    {t('parcel.recipientName')}
                </Text>
                <Text size='body4_font_bold' color='primary'>
                    {name}
                </Text>
            </div>
            <div className={cls.phone}>
                <Text size='body4_font_bold' color='secondary' className={cls.recipient}>
                    {t('parcel.recipientPhone')}
                </Text>
                <Text size='body4_font_bold' color='primary'>
                    {phone}
                </Text>
                <IconPhone addStyle={cls.icon_phone} />
            </div>
        </>
    );
};
