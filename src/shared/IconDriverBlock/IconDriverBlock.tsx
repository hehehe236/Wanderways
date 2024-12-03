import cls from './IconDriverBlock.module.css';
import { IconWheel } from '@/shared/svg/IconWheel.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export const IconDriverBlock = () => {
    return (
        <div className={cls.product_info} data-testid='iconDriverBlock'>
            <div className={cls.container_wheel}>
                <IconWheel addStyle={cls.wheel} />
            </div>
            <div className={cls.driver}>
                <Text size='headline2_bold' color='primary'>
                    To be replaced with real driver name in the future
                </Text>
                <Text size='body4_font_bold' color='secondary'>
                    Driver
                </Text>
            </div>
        </div>
    );
};
