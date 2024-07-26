import cls from './ParcelDetailsInfo.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { IconDot } from '@/shared/svg/IconDot.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';

export type ParcelDetailsInfoProps = {
    type: string;
    status: 'In Transit' | 'Failed' | 'Delivered' | 'New';
    price: number;
};

export const ParcelDetailsInfo = (props: ParcelDetailsInfoProps) => {
    const { type, status, price } = props;

    return (
        <section className={cls.container}>
            <div className={cls.container_icon}>
                <IconParcelFilled addStyle={cls.icon} />
            </div>
            <div className={cls.container_text}>
                <Text variant={'left'} size={'headline1_bold'} color={'primary'}>
                    {type}
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