import cls from './Switcher.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export type SwitcherType<T> = {
    leftTitle: string;
    rightTitle: string;
    handleClick: (value: T) => void;
    isActiveTab: T;
};

export const Switcher = <T extends string>(props: SwitcherType<T>) => {
    const { leftTitle, rightTitle, handleClick, isActiveTab } = props;

    const handleLeftTabClick = () => handleClick(leftTitle as T);
    const handleRightTabClick = () => handleClick(rightTitle as T);

    return (
        <div className={cls.container} data-testid='switcher'>
            <Button
                variant='tab'
                size='tab'
                background={isActiveTab === leftTitle ? 'white' : 'secondary'}
                onClick={handleLeftTabClick}
            >
                <Text size='body2_font_bold' color='primary'>
                    {leftTitle}
                </Text>
            </Button>
            <Button
                variant='tab'
                size='tab'
                background={isActiveTab === leftTitle ? 'secondary' : 'white'}
                onClick={handleRightTabClick}
            >
                <Text size='body2_font_bold' color='primary'>
                    {rightTitle}
                </Text>
            </Button>
        </div>
    );
};
