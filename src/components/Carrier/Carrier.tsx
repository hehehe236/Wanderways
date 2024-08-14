import { useSelector } from 'react-redux';

import cls from './Carrier.module.css';
import { IconWheel } from '@/shared/svg/IconWheel.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconPhone } from '@/shared/svg/IconPhone.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { useLocation } from 'react-router-dom';
import { Parcel } from '@/store/features/parcel/types.ts';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';

export const Carrier = () => {
    const { state: parcelId } = useLocation();
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );

    if (!parcel) return null;

    return (
        <div className={cls.container}>
            <div className={cls.container_wheel}>
                <IconWheel addStyle={cls.wheel} />
            </div>
            <div className={cls.container_text}>
                <Text size='headline2_bold' color='primary'>
                    {`${parcel.driver?.name} ${parcel.driver?.lastName}`}
                </Text>
                <div>
                    <span className={cls.phone}>Driver | </span>
                    <span className={cls.phone}>{parcel.driver?.phoneNumber}</span>
                </div>
            </div>
            <Button type='button' variant='icon' className={cls.container_phone}>
                <IconPhone addStyle={cls.icon_phone} />
            </Button>
        </div>
    );
};
