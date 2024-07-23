import { Link } from 'react-router-dom';

import cls from './Parcel.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrowRight } from '@/shared/svg/IconArrowRight.tsx';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import { ParcelProps } from '@/components/Parcel/types';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';

export const Parcel = (props: ParcelProps) => {
    const { senderId, details, shippingAddress, deliveryAddress, cost, children } = props;

    return (
        <Link to={`/parcel/${senderId}`} state={'qweeert'}>
            <button className={cls.container}>
                <div className={cls.address_status}>
                    <div className={cls.address}>
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>
                            {shippingAddress.city}
                        </Text>
                        <IconArrowRight addStyle={cls.arrow_icon} />
                        <Text size={'body1_font_bold'} color={'primary'} variant={'left'}>
                            {deliveryAddress.city}
                        </Text>
                    </div>
                    {children}
                </div>
                <div className={cls.product_info}>
                    <div className={cls.container_icon}>
                        <IconParcelFilled addStyle={cls.parcel_icon} />
                    </div>
                    <div className={cls.name_price}>
                        <Text size={'headline2_bold'} color={'primary'}>
                            {details}
                        </Text>
                        <Text size={'body4_font_bold'} color={'secondary'} className={cls.price}>
                            <IconHgryvnia addStyle={cls.hgryvnia} /> {cost}
                        </Text>
                    </div>
                    <IconArrow2Right addStyle={cls.arrow2right_icon} />
                </div>
            </button>
        </Link>
    );
};
