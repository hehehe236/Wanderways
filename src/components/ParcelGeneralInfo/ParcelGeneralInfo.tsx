import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cls from '@/components/ParcelGeneralInfo/ParcelGeneralInfo.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';
import useElementWidth from '@/hooks/useElementWidth.ts';
import { AddressDelivery } from '@/shared/AddressDelivery/AddressDelivery.tsx';
import { Parcel } from '@/store/features/parcel/types.ts';
import { Tag } from '@/shared/Tag/Tag.tsx';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import { changeStyleForStatusNew } from '@/utils/changeStyleForStatusNew.ts';

export const ParcelGeneralInfo = ({ parcelId }: { parcelId: number }) => {
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );
    if (!parcel) return null;

    const buttonRef = useElementWidth<HTMLButtonElement>();

    return (
        <Link to={`/parcel/${parcelId}`} state={parcelId}>
            <button
                className={changeStyleForStatusNew(parcel, cls.container, cls.background_new)}
                ref={buttonRef}
            >
                <div className={cls.address_status}>
                    <AddressDelivery
                        status={parcel}
                        deliveryAddress={parcel.deliveryAddress.city}
                        shippingAddress={parcel.shippingAddress.city}
                    />
                    <Tag
                        text={parcel.status}
                        background={parcel.status}
                        text_color={parcel.status}
                    />
                </div>
                <div className={cls.product_info}>
                    <div className={cls.container_icon}>
                        <IconParcelFilled addStyle={cls.parcel_icon} />
                    </div>
                    <div className={cls.name_price}>
                        <div className={cls.wrap_text}>
                            <Text
                                size='headline2_bold'
                                color='primary'
                                className={changeStyleForStatusNew(parcel, cls.name, cls.color_new)}
                            >
                                {parcel.type}
                            </Text>
                        </div>
                        <Text
                            size='body4_font_bold'
                            color='secondary'
                            className={changeStyleForStatusNew(parcel, cls.price, cls.color_new)}
                        >
                            <IconHgryvnia
                                addStyle={changeStyleForStatusNew(
                                    parcel,
                                    cls.hgryvnia,
                                    cls.stroke_new
                                )}
                            />
                            {parcel.cost}
                        </Text>
                    </div>
                    <IconArrow2Right
                        addStyle={changeStyleForStatusNew(
                            parcel,
                            cls.arrow2right_icon,
                            cls.stroke_new
                        )}
                    />
                </div>
            </button>
        </Link>
    );
};
