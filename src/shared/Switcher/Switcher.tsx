import cls from './Switcher.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export type SwitcherType = {
    leftTitle: string;
    rightTitle: string;
    handleClick: (value: boolean) => void;
    isActiveTab: boolean;
};

export const Switcher = (props: SwitcherType) => {
    const { leftTitle, rightTitle, handleClick, isActiveTab } = props;

    return (
        <div className={cls.container} data-testid='switcher'>
            <Button
                variant='tab'
                size='tab'
                background={isActiveTab ? 'white' : 'secondary'}
                onClick={() => handleClick(true)}
            >
                <Text size='body2_font_bold' color='primary'>
                    {leftTitle}
                </Text>
            </Button>
            <Button
                variant='tab'
                size='tab'
                background={isActiveTab ? 'secondary' : 'white'}
                onClick={() => handleClick(false)}
            >
                <Text size='body2_font_bold' color='primary'>
                    {rightTitle}
                </Text>
            </Button>
        </div>
    );
};
