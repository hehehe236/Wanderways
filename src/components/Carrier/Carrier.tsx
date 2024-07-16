import cls from './Carrier.module.css';
import { Wheel } from '@/shared/svg/Wheel.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Phone } from '@/shared/svg/Phone.tsx';

import { useGetCarrierQuery } from '@/store/services/parcelService.ts';

export const Carrier = () => {
    const { data: carrier, isLoading } = useGetCarrierQuery({});

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className={cls.container}>
            <div className={cls.container_wheel}>
                <Wheel addStyle={cls.wheel} />
            </div>
            <div className={cls.container_text}>
                <Text text={carrier.name} addStyle={cls.name} />
                <div>
                    <span className={cls.phone}>Driver | </span>
                    <span className={cls.phone}>{carrier.phoneNumber}</span>
                </div>
            </div>
            <button type={'button'} className={cls.container_phone}>
                <Phone addStyle={cls.icon_phone} />
            </button>
        </section>
    );
};
