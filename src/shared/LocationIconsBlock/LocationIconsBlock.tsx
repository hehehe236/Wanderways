import cls from './LocationIconsBlock.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { IconLocation } from '@/shared/svg/IconLocation.tsx';

export const LocationIconsBlock = () => {
    return (
        <div className={cls.container}>
            <Button type='button' variant='icon'>
                <IconLocation addStyle={cls.icon} />
            </Button>
            <div className={cls.line} />
            <Button type='button' variant='icon'>
                <IconLocation addStyle={cls.icon} />
            </Button>
        </div>
    );
};
