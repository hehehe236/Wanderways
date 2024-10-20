import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import cls from './ParcelCard.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { RideRouteDetails } from '@/components/RideRouteDetails/RideRouteDetails.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconClose } from '@/shared/svg/IconClose.tsx';
import { selectValueRideSwitcher } from '@/store/features/switchersSlice.ts';
import { Address } from '@/store/features/ride/types.ts';

export type ParcelCardProps = {
    children?: ReactNode;
    type: string;
    details?: string;
    cost: number;
    btnText: string;
    variant: 'requested' | 'accepted';
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate?: string;
    arrivalDate?: string;
};

export const ParcelCard = (props: ParcelCardProps) => {
    const {
        children,
        type,
        details,
        cost,
        btnText,
        variant,
        departureAddress,
        arrivalAddress,
        departureDate,
        arrivalDate,
    } = props;
    const isVisibleSendersList = useSelector(selectValueRideSwitcher);
    const variantParcel: ParcelCardProps['variant'] = 'requested';

    return (
        <BasisBlock>
            <ul className={cls.container}>
                <li className={cls.container_type}>
                    <IconParcelFilled addStyle={cls.icon_parcel} />
                    <Text size='body1_font_bold' color='primary'>
                        {type}
                    </Text>
                </li>
                <li>
                    <Text size='body4_font_bold' color='secondary'>
                        {details}
                    </Text>
                </li>
                <li>
                    <RideRouteDetails
                        departureAddress={departureAddress}
                        arrivalAddress={arrivalAddress}
                        departureDate={departureDate}
                        arrivalDate={arrivalDate}
                    />
                </li>
                <li>{children}</li>
                <li className={cls.submit_delivery}>
                    <div className={cls.container_price}>
                        <div className={cls.price}>
                            <IconHgryvnia addStyle={cls.icon_hgryvnia} />
                            <Text size='body2_font_bold' color='primary'>
                                {cost}
                            </Text>
                        </div>
                        <Text size='body4_font_bold' color='secondary'>
                            Price
                        </Text>
                    </div>
                    <div className={cls.block_btn}>
                        {variant === variantParcel && (
                            <Button background='red' variant='cancel'>
                                <IconClose addStyle={cls.icon_close} />
                            </Button>
                        )}
                        {variant !== variantParcel && (
                            <Button background='primary' size='confirm' variant='confirm'>
                                <Text size='body2_font_bold' color='white'>
                                    {btnText}
                                </Text>
                            </Button>
                        )}
                        {variant === variantParcel && isVisibleSendersList && (
                            <Button background='primary' size='confirm' variant='confirm'>
                                <Text size='body2_font_bold' color='white'>
                                    {btnText}
                                </Text>
                            </Button>
                        )}
                    </div>
                </li>
            </ul>
        </BasisBlock>
    );
};
