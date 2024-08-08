import cls from './ParcelCreateSuccess.module.css';
import { IconParcelCreateSuccess } from '@/shared/svg/IconParcelCreateSuccess.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconFindDriver } from '@/shared/svg/IconFindDriver.tsx';

export const ParcelCreateSuccess = ({ onClose }: { onClose: () => void }) => {
    const handleModal = () => onClose();

    return (
        <div className={cls.container}>
            <IconParcelCreateSuccess addStyle={cls.icon} />
            <Text size={'headline1_bold'} color={'primary'} className={cls.title}>
                Parcel created successfully
            </Text>
            <Text
                variant={'center'}
                size={'body3_font_bold'}
                color={'secondary'}
                className={cls.text}
            >
                Your parcel is ready for delivery. You can find a driver manually or let us find one
                for you automatically.
            </Text>
            <Button
                type={'button'}
                variant={'submit'}
                background={'primary'}
                size={'submit'}
                className={cls.btn_find}
            >
                <div className={cls.text_btn}>
                    <IconFindDriver />
                    <Text size={'body2_font_bold'} color={'white'}>
                        Find driver
                    </Text>
                </div>
            </Button>
            <Button
                type={'button'}
                variant={'submit'}
                background={'secondary'}
                size={'submit'}
                className={cls.btn_close}
                onClick={handleModal}
            >
                <div className={cls.text_btn}>
                    <Text size={'body2_font_bold'} color={'blue'}>
                        Close
                    </Text>
                </div>
            </Button>
        </div>
    );
};
