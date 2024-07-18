import { Link } from 'react-router-dom';

import cls from './Ride.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { ArrowRight } from '@/shared/svg/ArrowRight.tsx';
import { ParcelFilled } from '@/shared/svg/ParcelFilled.tsx';
import { Arrow2Right } from '@/shared/svg/Arrow2Right.tsx';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { RideProps } from '@/components/Ride/types.ts';
import { Dot } from '@/shared/svg/Dot.tsx';
import useElementWidth from '@/hooks/useElementWidth.ts';
import { Hgryvnia } from '@/shared/svg/Hgryvnia.tsx';

export const Ride = (props: RideProps) => {
    const { details, departureAddress, arrivalAddress, cost, status } = props;

    const buttonRef = useElementWidth();

    return (
        <Link to={"#"}>
            <button className={cls.container} ref={buttonRef}>
                <div className={cls.address_status}>
                    <div className={cls.address}>
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>{departureAddress.city}</Text>
                        <ArrowRight addStyle={cls.arrow_icon} />
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>{arrivalAddress.city}</Text>
                    </div>
                    <Tag text={status} background={status} />
                </div>
                <div className={cls.product_info}>
                    <div className={cls.container_icon}>
                        <ParcelFilled addStyle={cls.parcel_icon} />
                    </div>
                    <div className={cls.name_price}>
                        <div className={cls.wrap_text}>
                            <Text size={'headline2_bold'} color={'primary'} className={cls.name}>{details.join(', ')}</Text>
                        </div>
                        <Text size={'body4_font_bold'} color={'secondary'} className={cls.price}>
                            {details.length} parcels <Dot addStyle={cls.icon_dot}/> <Hgryvnia addStyle={cls.hgryvnia}/> {cost}
                        </Text>
                    </div>
                    <Arrow2Right addStyle={cls.arrow2right_icon} />
                </div>
            </button>
        </Link>
    );
};