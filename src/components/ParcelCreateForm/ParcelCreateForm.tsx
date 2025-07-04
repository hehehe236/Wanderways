import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import cls from './ParcelCreateForm.module.css';
import { Select } from '@/shared/Select/Select.tsx';
import { optionsTypeSelect } from '@/utils/db/optionsTypeSelect.ts';
import { deliveryAddress } from '@/utils/db/deliveryAddress.ts';
import { Placeholder } from '@/shared/Placeholder/Placeholder.tsx';
import { IconSelectType } from '@/shared/svg/IconSelectType.tsx';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ValidateSchemaParcelCreateForm } from '@/components/ParcelCreateForm/ValidateSchemaParcelCreateForm.ts';
import { useCreateParcelMutation } from '@/store/services/parcelService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { TextArea } from '@/shared/TextArea/TextArea.tsx';
import { deserializeAddress } from '@/utils/deserializeAddress.ts';
import { shippingAddress } from '@/utils/db/shippingAddress.ts';
import { LocationIconsBlock } from '@/shared/LocationIconsBlock/LocationIconsBlock.tsx';
import { Input } from '@/shared/Input/Input.tsx';
import { IconProfile } from '@/shared/svg/IconProfile.tsx';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { Phone } from '@/shared/Phone/Phone.tsx';
import { Modal } from '@/shared/Modal/Modal.tsx';
import { ParcelCreateSuccess } from '@/components/ParcelCreateSuccess/ParcelCreateSuccess.tsx';
import { DatePicker } from '@/shared/DatePicker/DatePicker.tsx';
import notification from '@/utils/NotificationManager.ts';
import { ParcelFormInputType } from '@/components/ParcelCreateForm/ParcelFormInputType.ts';
import { ROUTES } from '@/utils/routes.ts';
import { useTranslation } from 'react-i18next';

export const ParcelCreateForm = () => {
    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ParcelFormInputType>({
        resolver: yupResolver(ValidateSchemaParcelCreateForm),
        mode: 'onSubmit',
    });
    const [createNewParcel, { isLoading }] = useCreateParcelMutation();
    const [newParcelId, setNewParcelId] = useState(0);
    const handleModal = () => setIsOpenModal((prevState) => !prevState);

    const onSubmit: SubmitHandler<ParcelFormInputType> = async (data) => {
        if (data.recipientPhone === '+380' && !data.recipientEmail) {
            notification.showError(t('parcelCreate.messageError'));
            return;
        }

        const response = await createNewParcel({
            senderId: 1,
            details: data.detailsParcel || '',
            type: data.selectType.value,
            deliveryAddress: deserializeAddress(data.deliveryAddress.label),
            deliveryDate: data.deliveryDate,
            shippingAddress: deserializeAddress(data.shippingAddress.label),
            recipient: {
                name: data.recipientName,
                lastName: data.recipientLastName,
                email: data.recipientEmail,
                phoneNumber: data.recipientPhone === '+380' ? '' : data.recipientPhone,
            },
        });
        setNewParcelId(response.data.parcelId);

        handleModal();
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul className={cls.container_list}>
                    <li>
                        <BasisBlock>
                            <ul className={cls.container_list_select}>
                                <li>
                                    <Controller
                                        name='selectType'
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                field={field}
                                                options={optionsTypeSelect}
                                                placeholder={
                                                    <Placeholder
                                                        icon={<IconSelectType />}
                                                        text={t('parcelCreate.typePlaceholder')}
                                                    />
                                                }
                                                label={t('parcelCreate.typeLabel')}
                                                error={errors.selectType}
                                            />
                                        )}
                                    />
                                </li>
                                <li>
                                    <TextArea
                                        id='detailsParcel'
                                        register={register('detailsParcel')}
                                        label={t('parcelCreate.detailsLabel')}
                                        placeholder={t('parcelCreate.detailsPlaceholder')}
                                        error={errors.detailsParcel}
                                    />
                                </li>
                                <li>
                                    <Controller
                                        name='deliveryDate'
                                        control={control}
                                        render={({ field }) => (
                                            <DatePicker field={field} error={errors.deliveryDate} />
                                        )}
                                    />
                                </li>
                            </ul>
                        </BasisBlock>
                    </li>
                    <li>
                        <BasisBlock>
                            <div className={cls.block_address}>
                                <LocationIconsBlock />
                                <ul className={cls.container_list_select}>
                                    <li>
                                        <Controller
                                            name='deliveryAddress'
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    field={field}
                                                    options={deliveryAddress}
                                                    placeholder={t(
                                                        'parcelCreate.deliveryShippingPlaceholder'
                                                    )}
                                                    label={t('parcelCreate.deliveryFromLabel')}
                                                    error={errors.deliveryAddress}
                                                />
                                            )}
                                        />
                                    </li>
                                    <li>
                                        <Controller
                                            name='shippingAddress'
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    field={field}
                                                    options={shippingAddress}
                                                    placeholder={t(
                                                        'parcelCreate.deliveryShippingPlaceholder'
                                                    )}
                                                    label={t('parcelCreate.shippingToLabel')}
                                                    error={errors.shippingAddress}
                                                />
                                            )}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </BasisBlock>
                    </li>
                    <li>
                        <BasisBlock>
                            <ul className={cls.container_list_select}>
                                <li>
                                    <Input
                                        name='recipientName'
                                        type='text'
                                        label={t('parcelCreate.recipientNameLabel')}
                                        icon={<IconProfile />}
                                        placeholder={t('parcelCreate.recipientNamePlaceholder')}
                                        error={errors.recipientName}
                                        register={register('recipientName')}
                                    />
                                </li>
                                <li>
                                    <Input
                                        name='recipientLastName'
                                        type='text'
                                        label={t('parcelCreate.recipientSurnameLabel')}
                                        icon={<IconProfile />}
                                        placeholder={t('parcelCreate.recipientSurnamePlaceholder')}
                                        error={errors.recipientLastName}
                                        register={register('recipientLastName')}
                                    />
                                </li>
                                <li>
                                    <div className={cls.container_phone}>
                                        <Controller
                                            name='recipientPhone'
                                            control={control}
                                            render={({ field }) => (
                                                <Phone
                                                    field={field}
                                                    error={errors.recipientPhone}
                                                    label={t('parcelCreate.recipientPhoneLabel')}
                                                />
                                            )}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <Input
                                        name='recipientEmail'
                                        type='email'
                                        label={t('parcelCreate.recipientEmailLabel')}
                                        icon={<IconEmail />}
                                        placeholder={t('parcelCreate.recipientEmailPlaceholder')}
                                        error={errors.recipientEmail}
                                        register={register('recipientEmail')}
                                    />
                                </li>
                            </ul>
                        </BasisBlock>
                    </li>
                </ul>
                <Button
                    variant='submit'
                    type='submit'
                    background='primary'
                    size='submit'
                    className={cls.btn}
                >
                    <Text size='body2_font_bold' color='white'>
                        {t('parcelCreate.btnSubmit')}
                    </Text>
                </Button>
            </form>
            <Modal isOpen={isOpenModal} onClose={handleModal} redirect={ROUTES.HOME.path}>
                <ParcelCreateSuccess onClose={handleModal} parcelId={newParcelId} />
            </Modal>
        </>
    );
};
