import cls from './RouteDelivery.module.css';

import { Text } from '@/shared/Text/Text.tsx';
import { IconLocation } from '@/shared/svg/IconLocation.tsx';
import { IconBigDot } from '@/shared/svg/IconBigDot.tsx';

export type RouteDeliveryProps = {
    city?: string;
    street?: string;
};

export const RouteDelivery = ({ city, street }: RouteDeliveryProps) => {
    return (
        <div className={cls.container}>
            <IconBigDot />
            <div className={cls.container_address}>
                <div className={cls.container_text}>
                    <Text size={'headline2_bold'} color={'primary'} variant={'left'}>
                        {city}
                    </Text>
                    <Text size={'body4_font_bold'} color={'secondary'} variant={'left'}>
                        {street}
                    </Text>
                </div>
                <IconLocation addStyle={cls.icon} />
            </div>
        </div>
    );
};
