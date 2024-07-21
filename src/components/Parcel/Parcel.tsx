import { Link } from 'react-router-dom';

import cls from './Parcel.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { ArrowRight } from '@/shared/svg/ArrowRight.tsx';
import { ParcelFilled } from '@/shared/svg/ParcelFilled.tsx';
import { Arrow2Right } from '@/shared/svg/Arrow2Right.tsx';
import { ParcelProps } from '@/components/Parcel/types';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { Hgryvnia } from '@/shared/svg/Hgryvnia.tsx';

export const Parcel = (props: ParcelProps) => {
    const {
        senderId,
        details,
        shippingAddress,
        deliveryAddress,
        cost,
        status
    } = props;

    return (
        <Link to={`/parcel/${senderId}`} state={'qweeert'}>
            <button className={cls.container}>
                <div className={cls.address_status}>
                    <div className={cls.address}>
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>{shippingAddress.city}</Text>
                        <ArrowRight addStyle={cls.arrow_icon} />
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>{deliveryAddress.city}</Text>
                    </div>
                    <Tag text={status} background={status} />
                </div>
                <div className={cls.product_info}>
                    <div className={cls.container_icon}>
                        <ParcelFilled addStyle={cls.parcel_icon} />
                    </div>
                    <div className={cls.name_price}>
                        <Text size={'headline2_bold'} color={'primary'}>{details}</Text>
                        <Text size={'body4_font_bold'} color={'secondary'} className={cls.price}><Hgryvnia addStyle={cls.hgryvnia}/> {cost}</Text>
                    </div>
                    <Arrow2Right addStyle={cls.arrow2right_icon} />
                </div>
            </button>
        </Link>
    );
};