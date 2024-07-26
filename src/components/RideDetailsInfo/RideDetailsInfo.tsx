import cls from './RideDetailsInfo.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { IconDot } from '@/shared/svg/IconDot.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';

export type RideDetailsInfoProps = {
    type: string;
    status: 'In Transit' | 'Failed' | 'Delivered' | 'New';
    totalCost: number;
};

export const RideDetailsInfo = (props: RideDetailsInfoProps) => {
    const { type, status, totalCost} = props;

    const nameTypes = type === '0'
        ? 'No parcels'
        : type === '1' ? `${type} parcel` : `${type} parcels`;

    return (
        <section className={cls.container}>
            <div className={cls.container_icon}>
                <IconParcelFilled addStyle={cls.icon} />
            </div>
            <div className={cls.container_text}>
                <Text variant={'left'} size={'headline1_bold'} color={'primary'}>
                    {nameTypes}
                </Text>
                <div className={cls.container_status}>
                    <Tag text={status} background={status} />
                    {nameTypes !== 'No parcels' && (
                        <>
                            <IconDot addStyle={cls.icon_dot} />
                            <div className={cls.container_price}>
                                <IconHgryvnia addStyle={cls.icon_hryvnia} />
                                <Text variant={'left'} size={'body2_font_bold'} color={'secondary'}>
                                    {totalCost}
                                </Text>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </section>)
}