import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import cls from './ParcelDeliveryRequests.module.css';
import { Ride as RideType } from '@/store/features/ride/types.ts';
import { selectRideById } from '@/store/features/ride/rideSlice.ts';
import { RideSwitcher, selectRideSwitcherValue } from '@/store/features/switchersSlice.ts';
import { ParcelCard } from '@/shared/ParcelCard/ParcelCard.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconClose } from '@/shared/svg/IconClose.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { useState } from 'react';
import { Modal } from '@/shared/Modal/Modal.tsx';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';
import { IconWarning } from '@/shared/svg/IconWarning.tsx';
import { DualButtonGroup } from '@/shared/DualButtonGroup/DualButtonGroup.tsx';
import notification from '@/utils/NotificationManager.ts';
import { useTranslation } from 'react-i18next';

export const ParcelDeliveryRequests = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const { pathname } = useLocation();
    const isRequested = pathname.endsWith('requested');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ride: RideType | undefined = useSelector((state: { ride: RideType[] }) =>
        selectRideById(state, Number(id))
    );
    if (!ride) return null;

    const rideSwitcher = useSelector(selectRideSwitcherValue);
    const data = getDeliveryRequests(ride, rideSwitcher, isRequested);

    if (!data) return null;

    function getDeliveryRequests(ride: RideType, rideSwitcher: RideSwitcher, isRequested: boolean) {
        const { fromSenders, myRequests } = ride?.senderRequested || {};

        if (rideSwitcher === 'From Senders') {
            return isRequested ? fromSenders : fromSenders?.slice(0, 1);
        } else {
            return isRequested ? myRequests : myRequests?.slice(0, 1);
        }
    }

    const handleOpenModal = () => setIsModalOpen(true);

    const handleClickApprove = () => notification.showSuccess(t('ride.messageSuccess'));

    const handleClickBack = () => setIsModalOpen(false);

    const handleClickYes = () => setIsModalOpen(false);

    return (
        <>
            <ul className={cls.container} data-testid='deliveryRequests'>
                {data.map(
                    ({
                        parcelId,
                        type,
                        details,
                        cost,
                        deliveryDate,
                        deliveryAddress,
                        shippingDate,
                        shippingAddress,
                    }) => (
                        <li key={parcelId}>
                            <ParcelCard
                                type={type}
                                details={details}
                                cost={cost}
                                departureAddress={shippingAddress}
                                arrivalAddress={deliveryAddress}
                                departureDate={shippingDate}
                                arrivalDate={deliveryDate}
                                actionNode={
                                    <div className={cls.block_btn} data-testid='rideBlockBtn'>
                                        <Button
                                            background='red'
                                            variant='cancel'
                                            onClick={handleOpenModal}
                                        >
                                            <IconClose addStyle={cls.icon_close} />
                                        </Button>
                                        {rideSwitcher === t('ride.leftTitle') && (
                                            <Button
                                                background='primary'
                                                size='confirm'
                                                variant='confirm'
                                                onClick={handleClickApprove}
                                            >
                                                <Text size='body2_font_bold' color='white'>
                                                    {t('ride.btnApprove')}
                                                </Text>
                                            </Button>
                                        )}
                                    </div>
                                }
                            />
                        </li>
                    )
                )}
            </ul>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className={cls.container_modal}>
                        <IconTitlePageBlock icon={<IconWarning />} title={t('ride.modalTitle')} />
                        <DualButtonGroup
                            backgroundLeft='secondary'
                            backgroundRight='red'
                            textLeft={t('ride.btnModalCancel')}
                            textRight={t('ride.btnModalConfirm')}
                            textSize='body2_font_bold'
                            textColorLeft='blue'
                            textColorRight='white'
                            handleClickLeftBtn={handleClickBack}
                            handleClickRightBtn={handleClickYes}
                        />
                    </div>
                </Modal>
            )}
        </>
    );
};
