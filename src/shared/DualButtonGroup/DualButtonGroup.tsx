import cls from './DualButtonGroup.module.css';
import { Button, ButtonProps } from '@/shared/Button/Button.tsx';
import { Text, TextProps } from '@/shared/Text/Text.tsx';

export type DualButtonGroupProps = {
    backgroundLeft: ButtonProps['background'];
    backgroundRight: ButtonProps['background'];
    textColorLeft: TextProps['color'];
    textColorRight: TextProps['color'];
    textSize: TextProps['size'];
    textLeft: string;
    textRight: string;
    handleClickLeftBtn: () => void;
    handleClickRightBtn: () => void;
};

export const DualButtonGroup = (props: DualButtonGroupProps) => {
    const {
        backgroundLeft,
        backgroundRight,
        textLeft,
        textSize,
        textColorLeft,
        textRight,
        textColorRight,
        handleClickLeftBtn,
        handleClickRightBtn,
    } = props;
    return (
        <div className={cls.container} data-testid='dualButtonGroup'>
            <Button background={backgroundLeft} variant='submit' onClick={handleClickLeftBtn}>
                <Text size={textSize} color={textColorLeft}>
                    {textLeft}
                </Text>
            </Button>
            <Button background={backgroundRight} variant='submit' onClick={handleClickRightBtn}>
                <Text size={textSize} color={textColorRight}>
                    {textRight}
                </Text>
            </Button>
        </div>
    );
};
