import cls from './IconParcelTypeBlock.module.css';
import { IconParcelFilled } from '@/shared/svg/IconParcelFilled.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconHgryvnia } from '@/shared/svg/IconHgryvnia.tsx';

export const IconParcelTypeBlock = () => {
    return (
        <div className={cls.product_info} data-testid='iconParcelTypeBlock'>
            <div className={cls.container_icon}>
                <IconParcelFilled addStyle={cls.parcel_icon} />
            </div>
            <div className={cls.name_price}>
                <Text size='headline2_bold' color='primary'>
                    To be replaced with real parcel type in the future
                </Text>
                <Text size='body4_font_bold' color='secondary' className={cls.price}>
                    <IconHgryvnia addStyle={cls.hgryvnia} />
                    To be replaced with real parcel price in the future
                </Text>
            </div>
        </div>
    );
};
