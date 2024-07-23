import cls from './ParcelDetails.module.css';

import { Text } from '@/shared/Text/Text.tsx';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { IconDot } from '@/shared/svg/IconDot.tsx';

export type ParcelDetailsProps = {
    details: string;
    status: 'In Transit' | 'Failed' | 'Delivered' | 'New';
    price: number;
};

export const ParcelDetails = (props: ParcelDetailsProps) => {
    const { details, status, price } = props;

    return (
        <section className={cls.container}>
            <div className={cls.container_icon}>
                <IconParcelFilled addStyle={cls.icon} />
            </div>
            <div className={cls.container_text}>
                <Text variant={'left'} size={'headline1_bold'} color={'primary'}>
                    {details}
                </Text>
                <div className={cls.container_status}>
                    <Tag text={status} background={status} />
                    <IconDot addStyle={cls.icon_dot} />
                    <div className={cls.container_price}>
                        <IconHgryvnia addStyle={cls.icon_hryvnia} />
                        <Text variant={'left'} size={'body2_font_bold'} color={'secondary'}>
                            {price}
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    );
};
