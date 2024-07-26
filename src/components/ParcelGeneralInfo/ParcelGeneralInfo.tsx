import { Link } from 'react-router-dom';

import cls from '@/components/ParcelGeneralInfo/ParcelGeneralInfo.module.css';
import { ParcelGeneralInfoProps } from '@/components/ParcelGeneralInfo/type.ts';
import { Text } from '@/shared/Text/Text.tsx';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import useElementWidth from '@/hooks/useElementWidth.ts';
import { AddressDelivery } from '@/shared/AddressDelivery/AddressDelivery.tsx';

export const ParcelGeneralInfo = (props: ParcelGeneralInfoProps) => {
    const {
        senderId,
        type,
        cost,
        shippingAddress,
        deliveryAddress,
        children
    } = props;

    const buttonRef = useElementWidth();

    return (
        <Link to={`/parcel/${senderId}`} >
            <button className={cls.container} ref={buttonRef}>
                <div className={cls.address_status}>
                    <AddressDelivery deliveryAddress={deliveryAddress.city} shippingAddress={shippingAddress.city}/>
                    {children}
                </div>
                    <div className={cls.product_info}>
                        <div className={cls.container_icon}>
                            <IconParcelFilled addStyle={cls.parcel_icon} />
                        </div>
                        <div className={cls.name_price}>
                            <div className={cls.wrap_text}>
                                <Text size={'headline2_bold'} color={'primary'} className={cls.name}>
                                    {type}
                                </Text>
                            </div>
                            <Text size={'body4_font_bold'} color={'secondary'} className={cls.price}>
                                <IconHgryvnia addStyle={cls.hgryvnia} /> {cost}
                            </Text>
                        </div>
                        <IconArrow2Right addStyle={cls.arrow2right_icon} />
                    </div>
            </button>
        </Link>
    )
}