import { Link, useNavigate } from 'react-router-dom';

import cls from './ParcelCreateSuccess.module.css';
import { IconParcelCreateSuccess } from '@/shared/svg/IconParcelCreateSuccess.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconFindDriver } from '@/shared/svg/IconFindDriver.tsx';
import { ROUTES } from '@/utils/routes.ts';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';

export type ParcelCreateSuccessProps = {
    onClose: () => void;
    parcelId: number;
};

export const ParcelCreateSuccess = ({ onClose, parcelId }: ParcelCreateSuccessProps) => {
    const navigate = useNavigate();
    const handleModal = () => {
        onClose();
        navigate(ROUTES.HOME.path);
    };

    return (
        <div className={cls.container} id='modal-parcel-create-success'>
            <IconTitlePageBlock
                icon={<IconParcelCreateSuccess addStyle={cls.icon} />}
                title='Parcel created successfully'
            />
            <Text variant='center' size='body3_font_bold' color='secondary' className={cls.text}>
                Your parcel is ready for delivery. You can find a driver manually or let us find one
                for you automatically.
            </Text>
            <Link to={ROUTES.AVAILABLE_DRIVERS.path} className={cls.btn_find} state={parcelId}>
                <Button type='button' variant='submit' background='primary' size='submit'>
                    <div className={cls.text_btn}>
                        <IconFindDriver />
                        <Text size='body2_font_bold' color='white'>
                            Find driver
                        </Text>
                    </div>
                </Button>
            </Link>
            <Button
                type='button'
                variant='submit'
                background='secondary'
                size='submit'
                className={cls.btn_close}
                onClick={handleModal}
            >
                <div className={cls.text_btn}>
                    <Text size='body2_font_bold' color='blue'>
                        Close
                    </Text>
                </div>
            </Button>
        </div>
    );
};
