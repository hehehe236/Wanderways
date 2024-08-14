import cls from './RecipientInfo.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconPhone } from '@/shared/svg/IconPhone.tsx';

export type RecipientInfoProps = {
    name: string;
    phone: string;
};

export const RecipientInfo = (props: RecipientInfoProps) => {
    const { name, phone } = props;

    return (
        <>
            <div className={cls.name}>
                <Text size='body4_font_bold' color='secondary' className={cls.recipient}>
                    Name
                </Text>
                <Text size='body4_font_bold' color='primary'>
                    {name}
                </Text>
            </div>
            <div className={cls.phone}>
                <Text size='body4_font_bold' color='secondary' className={cls.recipient}>
                    Phone number
                </Text>
                <Text size='body4_font_bold' color='primary'>
                    {phone}
                </Text>
                <IconPhone addStyle={cls.icon_phone} />
            </div>
        </>
    );
};
