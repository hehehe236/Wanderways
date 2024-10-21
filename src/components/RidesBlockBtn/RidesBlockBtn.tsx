import cls from './RidesBlockBtn.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { IconClose } from '@/shared/svg/IconClose.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Recipient, Sender } from '@/store/features/ride/types.ts';
import { useSelector } from 'react-redux';
import { selectValueRideSwitcher } from '@/store/features/switchersSlice.ts';

export type RidesBlockBtnProps = {
    sender?: Sender;
    recipient?: Recipient;
};

export const RidesBlockBtn = (props: RidesBlockBtnProps) => {
    const { sender, recipient } = props;
    const rideSwitcher = useSelector(selectValueRideSwitcher);

    return (
        <>
            {sender || recipient ? (
                <div className={cls.block_btn} data-testid='rideBlockBtn'>
                    <Button background='primary' size='confirm' variant='confirm'>
                        <Text size='body2_font_bold' color='white'>
                            Confirm delivery
                        </Text>
                    </Button>
                </div>
            ) : (
                <div className={cls.block_btn} data-testid='rideBlockBtn'>
                    <Button background='red' variant='cancel'>
                        <IconClose addStyle={cls.icon_close} />
                    </Button>
                    {rideSwitcher === 'From Senders' && (
                        <Button background='primary' size='confirm' variant='confirm'>
                            <Text size='body2_font_bold' color='white'>
                                Approve
                            </Text>
                        </Button>
                    )}
                </div>
            )}
        </>
    );
};
