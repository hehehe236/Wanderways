import cls from './RecepientInfo.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconPhone } from '@/shared/svg/IconPhone.tsx';

export type RecepientInfoProps = {
    variant: 'Recipient' | 'Sender';
    name: string;
    phone: string;
};

export const RecepientInfo = (props: RecepientInfoProps) => {
    const { variant, name, phone } = props;

    return (
        <>
            <div className={cls.name}>
                <Text size={'body4_font_bold'} color={'secondary'} className={cls.recipient}>
                    {variant}
                </Text>
                <Text size={'body4_font_bold'} color={'primary'}>
                    {name}
                </Text>
            </div>
            <div className={cls.phone}>
                <Text size={'body4_font_bold'} color={'secondary'} className={cls.recipient}>
                    Phone number
                </Text>
                <Text size={'body4_font_bold'} color={'primary'}>
                    {phone}
                </Text>
                <IconPhone addStyle={cls.icon_phone} />
            </div>
        </>
    );
};
