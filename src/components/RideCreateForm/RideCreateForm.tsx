import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import cls from './RideCreateForm.module.css';
import { ValidateSchemaRideCreateForm } from '@/components/RideCreateForm/ValidateSchemaRideCreateForm.ts';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { LocationIconsBlock } from '@/shared/LocationIconsBlock/LocationIconsBlock.tsx';
import { Select } from '@/shared/Select/Select.tsx';
import { deliveryAddress } from '@/utils/db/deliveryAddress.ts';
import { shippingAddress } from '@/utils/db/shippingAddress.ts';
import { DatePicker } from '@/shared/DatePicker/DatePicker.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { deserializeAddress } from '@/utils/deserializeAddress.ts';
import { useCreateRideMutation } from '@/store/services/rideService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { AddNew } from '@/shared/AddNew/AddNew.tsx';
import { VehicleSelection } from '@/components/VehicleSelection/VehicleSelection.tsx';
import { RideFormInputType } from '@/components/RideCreateForm/RideFormInputType.ts';
import notification from '@/utils/NotificationManager.ts';
import { ROUTES } from '@/utils/routes.ts';
import { useTranslation } from 'react-i18next';

export const RideCreateForm = () => {
    const { t } = useTranslation();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RideFormInputType>({
        resolver: yupResolver(ValidateSchemaRideCreateForm),
        mode: 'onSubmit',
    });
    const [createNewRide, { isLoading }] = useCreateRideMutation();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<RideFormInputType> = async (data) => {
        if (!data.vehicleId) {
            notification.showError(t('rideCreate.messageError'));
            return;
        }

        const response = await createNewRide({
            driverId: 1,
            arrivalAddress: deserializeAddress(data.deliveryAddress.label),
            departureAddress: deserializeAddress(data.shippingAddress.label),
            arrivalDate: data.deliveryDate,
            vehicleId: data.vehicleId,
        });
        notification.showSuccess(t('rideCreate.messageSuccess'));
        navigate(ROUTES.AVAILABLE_PARCELS.path, { state: response.data.rideId });
    };

    if (isLoading) return <Loader />;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BasisBlock>
                <ul className={cls.container_list_select}>
                    <li>
                        <div className={cls.block_address}>
                            <LocationIconsBlock />
                            <ul className={cls.container_list_select}>
                                <li id='deliveryAddress'>
                                    <Controller
                                        name='deliveryAddress'
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                field={field}
                                                options={deliveryAddress}
                                                placeholder={t('rideCreate.placeholder')}
                                                label={t('rideCreate.deliveryFromLabel')}
                                                error={errors.deliveryAddress}
                                            />
                                        )}
                                    />
                                </li>
                                <li id='shippingAddress'>
                                    <Controller
                                        name='shippingAddress'
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                field={field}
                                                options={shippingAddress}
                                                placeholder={t('rideCreate.placeholder')}
                                                label={t('rideCreate.shippingToLabel')}
                                                error={errors.shippingAddress}
                                            />
                                        )}
                                    />
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li id='deliveryDate'>
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
            <div className={cls.choose_vehicle}>
                <Text size='body1_font_bold' color='primary'>
                    {t('rideCreate.chooseVehicle')}
                </Text>
                <AddNew />
            </div>
            <VehicleSelection control={control} name='vehicleId' error={errors.vehicleId} />
            <Button
                variant='submit'
                type='submit'
                background='primary'
                size='submit'
                className={cls.btn}
            >
                <Text size='body2_font_bold' color='white'>
                    {t('rideCreate.btnSubmit')}
                </Text>
            </Button>
        </form>
    );
};
