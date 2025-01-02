import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import cls from './ParcelCard.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { RideRouteDetails } from '@/components/RideRouteDetails/RideRouteDetails.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import {
    Address,
    Recipient as RecipientType,
    Sender as SenderType,
} from '@/store/features/ride/types.ts';
import { Recipient } from '@/components/Recipient/Recipient';
import { Sender } from '@/components/Sender/Sender';

export type ParcelCardProps = {
    type: string;
    details?: string;
    cost: number;
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate?: string;
    arrivalDate?: string;
    recipient?: RecipientType;
    sender?: SenderType;
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
    const { t } = useTranslation();
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
                {recipient && (
                    <li className={cls.line}>
                        <Recipient
                            name={recipient.name}
                            lastName={recipient.lastName}
                            phoneNumber={recipient.phoneNumber}
                        />
                    </li>
                )}
                {sender && (
                    <li className={cls.line}>
                        <Sender
                            name={sender.name}
                            lastName={sender.lastName}
                            phoneNumber={sender.phoneNumber}
                        />
                    </li>
                )}
                <li className={cls.submit_delivery}>
                    <div className={cls.container_price}>
                        <div className={cls.price}>
                            <IconHgryvnia addStyle={cls.icon_hgryvnia} />
                            <Text size='body2_font_bold' color='primary' data-testid='cost'>
                                {cost}
                            </Text>
                        </div>
                        <Text size='body4_font_bold' color='secondary' data-testid='price'>
                            {t('ride.price')}
                        </Text>
                    </div>
                    {actionNode}
                </li>
            </ul>
        </BasisBlock>
    );
};
