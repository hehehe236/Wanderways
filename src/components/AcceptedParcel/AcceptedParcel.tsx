import cls from './AcceptedParcel.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { RouteDetails } from '@/components/RouteDetails/RouteDetails.tsx';
import { RecipientSenderInfo } from '@/components/RecipientSenderInfo/RecipientSenderInfo.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { Button } from '@/shared/Button/Button.tsx';

export type AcceptedParcelProps = {
    type: string;
    details: string;
    shipStreet: string;
    shipCity: string;
    delivStreet: string;
    delivCity: string;
    shippingDate: string;
    deliveryDate: string;
    sender: {
        name: string;
        lastName: string;
        phoneNumber: string;
    };
    recipient: {
        name: string;
        lastName: string;
        phoneNumber: string;
    };
    cost: number;
}


export const AcceptedParcel = (props: AcceptedParcelProps) => {
const {
    type,
    details,
    shipStreet,
    shipCity,
    delivStreet,
    delivCity,
    shippingDate,
    deliveryDate,
    sender,
    recipient,
    cost
} = props;

    return (
        <ul className={cls.container}>
            <li className={cls.container_type}>
                <IconParcelFilled addStyle={cls.icon_parcel} />
                <Text size={'body1_font_bold'} color={'primary'}>{type}</Text>
            </li>
            <li>
                <Text size={'body4_font_bold'} color={'secondary'}>{details}</Text>
            </li>
            <li>
                <RouteDetails shipStreet={shipStreet} shipCity={shipCity} delivStreet={delivStreet}
                              delivCity={delivCity} shippingDate={shippingDate} deliveryDate={deliveryDate} />
            </li>
            <li>
                <RecipientSenderInfo
                    nameRecipient={`${recipient.name} ${recipient.lastName}`}
                    phoneRecipient={recipient.phoneNumber}
                    nameSender={`${sender.name} ${sender.lastName}`}
                    phoneSender={sender.phoneNumber}
                    variant={'ride'}
                />
            </li>
            <li className={cls.submit_delivery}>
                <div className={cls.container_price}>
                    <div className={cls.price}>
                        <IconHgryvnia addStyle={cls.icon_hgryvnia}/>
                        <Text size={'body2_font_bold'} color={'primary'}>{cost}</Text>
                    </div>
                    <Text size={'body4_font_bold'} color={'secondary'}>Price</Text>
                </div>
                <Button variant={'submit'} background={'primary'}>
                    <Text size={'body2_font_bold'} color={'white'}>Confirm delivery</Text>
                </Button>
            </li>
        </ul>
    );
}