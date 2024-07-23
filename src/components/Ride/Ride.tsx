import { Link } from 'react-router-dom';

import cls from './Ride.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrowRight } from '@/shared/svg/IconArrowRight.tsx';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import { RideProps } from '@/components/Ride/types.ts';
import { IconDot } from '@/shared/svg/IconDot.tsx';
import useElementWidth from '@/hooks/useElementWidth.ts';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';

export const Ride = (props: RideProps) => {
    const { details, departureAddress, arrivalAddress, cost, status, children } = props;

    const buttonRef = useElementWidth();

    return (
        <Link to={'#'}>
            <button className={cls.container} ref={buttonRef}>
                <div className={cls.address_status}>
                    <div className={cls.address}>
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>
                            {departureAddress.city}
                        </Text>
                        <IconArrowRight addStyle={cls.arrow_icon} />
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>
                            {arrivalAddress.city}
                        </Text>
                    </div>
                    {children}
                </div>
                <div className={cls.product_info}>
                    <div className={cls.container_icon}>
                        <IconParcelFilled addStyle={cls.parcel_icon} />
                    </div>
                    <div className={cls.name_price}>
                        <div className={cls.wrap_text}>
                            <Text size={'headline2_bold'} color={'primary'} className={cls.name}>
                                {details.join(', ')}
                            </Text>
                        </div>
                        <Text size={'body4_font_bold'} color={'secondary'} className={cls.price}>
                            {details.length} parcels <IconDot addStyle={cls.icon_dot} />{' '}
                            <IconHgryvnia addStyle={cls.hgryvnia} /> {cost}
                        </Text>
                    </div>
                    <IconArrow2Right addStyle={cls.arrow2right_icon} />
                </div>
            </button>
        </Link>
    );
};
