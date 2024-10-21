import { ReactNode } from 'react';

import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import cls from './ParcelCard.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { RideRouteDetails } from '@/components/RideRouteDetails/RideRouteDetails.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { Address } from '@/store/features/ride/types.ts';

export type ParcelCardProps = {
    type: string;
    details?: string;
    cost: number;
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate?: string;
    arrivalDate?: string;
    recipient?: ReactNode;
    sender?: ReactNode;
    actionNode: ReactNode;
};

export const ParcelCard = (props: ParcelCardProps) => {
    const {
        type,
        details,
        cost,
        departureAddress,
        arrivalAddress,
        departureDate,
        arrivalDate,
        recipient,
        sender,
        actionNode,
    } = props;

    return (
        <BasisBlock>
            <ul className={cls.container} data-testid='parcelCard'>
                <li className={cls.container_type}>
                    <IconParcelFilled addStyle={cls.icon_parcel} />
                    <Text size='body1_font_bold' color='primary' data-testid='type'>
                        {type}
                    </Text>
                </li>
                <li className={cls.line}>
                    <Text size='body4_font_bold' color='secondary' data-testid='details'>
                        {details}
                    </Text>
                </li>
                <li className={cls.line}>
                    <RideRouteDetails
                        departureAddress={departureAddress}
                        arrivalAddress={arrivalAddress}
                        departureDate={departureDate}
                        arrivalDate={arrivalDate}
                    />
                </li>
                {recipient && <li className={cls.line}>{recipient}</li>}
                {sender && <li className={cls.line}>{sender}</li>}
                <li className={cls.submit_delivery}>
                    <div className={cls.container_price}>
                        <div className={cls.price}>
                            <IconHgryvnia addStyle={cls.icon_hgryvnia} />
                            <Text size='body2_font_bold' color='primary' data-testid='cost'>
                                {cost}
                            </Text>
                        </div>
                        <Text size='body4_font_bold' color='secondary' data-testid='price'>
                            Price
                        </Text>
                    </div>
                    {actionNode}
                </li>
            </ul>
        </BasisBlock>
    );
};
