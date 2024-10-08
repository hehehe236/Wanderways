import { IconWheel } from '@/shared/svg/IconWheel.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ParcelRequestDriver } from '@/store/features/parcel/types.ts';
import cls from './DriverRequest.module.css';
import { AddressDelivery } from '@/shared/AddressDelivery/AddressDelivery.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconClose } from '@/shared/svg/IconClose.tsx';

export const DriverRequest = (props: ParcelRequestDriver) => {
    const { name, lastName, departureAddress, arrivalAddress } = props;

    return (
        <div className={cls.container}>
            <div className={cls.title}>
                <div className={cls.container_wheel}>
                    <IconWheel addStyle={cls.wheel} />
                </div>
                <div className={cls.address_btns}>
                    <div className={cls.container_address}>
                        <div>
                            <Text size='headline2_bold' color='primary'>
                                {`${name} ${lastName}`}
                            </Text>
                        </div>
                        <AddressDelivery
                            color='secondary'
                            font='body4_font_bold'
                            deliveryAddress={departureAddress.city}
                            shippingAddress={arrivalAddress.city}
                        />
                    </div>
                </div>
            </div>
            <div className={cls.line} />
            <div className={cls.block_btn}>
                <Button background='red' variant='cancel'>
                    <IconClose addStyle={cls.icon_close} />
                </Button>
                <Button background='secondary' className={cls.btn_approve}>
                    <Text size='body2_font_bold' variant='center' color='blue'>
                        Approve
                    </Text>
                </Button>
            </div>
        </div>
    );
};
