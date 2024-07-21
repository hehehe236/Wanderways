import cls from './Carrier.module.css';
import { Wheel } from '@/shared/svg/Wheel.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Phone } from '@/shared/svg/Phone.tsx';
import { Button } from '@/shared/Button/Button.tsx';

export type CarrierProps = {
    name: string;
    phoneNumber: string;
}

export const Carrier = (props: CarrierProps) => {
    const {name, phoneNumber} = props;

    return (
        <section className={cls.container}>
            <div className={cls.container_wheel}>
                <Wheel addStyle={cls.wheel} />
            </div>
            <div className={cls.container_text}>
                <Text size={'headline2_bold'} color={'primary'}>{name}</Text>
                <div>
                    <span className={cls.phone}>Driver | </span>
                    <span className={cls.phone}>{phoneNumber}</span>
                </div>
            </div>
            <Button type={'button'} variant={'icon'} className={cls.container_phone}>
                <Phone addStyle={cls.icon_phone} />
            </Button>
        </section>
    );
};
