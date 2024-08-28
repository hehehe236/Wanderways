import cls from './AvailableParcelCard.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Parcel } from '@/components/AvailableParcelCard/types.ts';
import { AvailableParcelRouteDetails } from '@/components/AvailableParcelRouteDetails/AvailableParcelRouteDetails.tsx';

export const AvailableParcelCard = ({ parcel }: { parcel: Partial<Parcel> }) => {
    const { arrivalAddress, arrivalDate, departureAddress, departureDate, type, details, cost } =
        parcel;

    return (
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
                <AvailableParcelRouteDetails
                    arrivalAddress={arrivalAddress}
                    arrivalDate={arrivalDate}
                    departureAddress={departureAddress}
                    departureDate={departureDate}
                />
            </li>
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
                <Button variant='submit' background='primary'>
                    <Text size='body2_font_bold' color='white'>
                        Request
                    </Text>
                </Button>
            </li>
        </ul>
    );
};
