import { useSelector } from 'react-redux';

import cls from './AvailableDriversTransit.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import { Parcel } from '@/store/features/parcel/types.ts';

export const AvailableDriversTransit = ({ parcelId }: { parcelId: number }) => {
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );
    return (
        <div className={cls.container} data-testid='availableDriversTransit'>
            <div className={cls.container_dot}>
                <div className={cls.dot} />
                <div className={cls.line} />
                <div className={cls.dot} />
            </div>
            <div className={cls.city}>
                <Text size='headline2_bold' color='primary'>
                    {parcel?.deliveryAddress.city}
                </Text>
                <Text size='headline2_bold' color='primary'>
                    {parcel?.shippingAddress.city}
                </Text>
            </div>
            <div className={cls.city}>
                <Text size='body4_font_bold' color='secondary'>
                    {parcel?.deliveryAddress.street}
                </Text>
                <Text size='body4_font_bold' color='secondary'>
                    {parcel?.shippingAddress.street}
                </Text>
            </div>
        </div>
    );
};
