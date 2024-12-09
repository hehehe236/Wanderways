import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';

import { ProfileVehicleFormType } from './ProfileVehicleType.ts';
import { Select } from '@/shared/Select/Select.tsx';
import { vehicleType } from '@/utils/db/vehicleType.ts';
import { Placeholder } from '@/shared/Placeholder/Placeholder.tsx';
import { IconCar } from '@/shared/svg/IconCar.tsx';
import cls from './ProfileVehicleForm.module.css';
import { ValidateSchemaProfileVehicleForm } from './ValidateSchemaProfileVehicleForm.ts';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Input } from '@/shared/Input/Input.tsx';
import { modelType } from '@/utils/db/modelType.ts';
import { IconPlate } from '@/shared/svg/IconPlate.tsx';
import { useCreateVehicleMutation } from '@/store/services/vehicleService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import notification from '@/utils/NotificationManager.ts';

export const ProfileVehicleForm = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<ProfileVehicleFormType>({
        resolver: yupResolver(ValidateSchemaProfileVehicleForm),
        mode: 'onSubmit',
    });
    const [isVisibleInput, setIsVisibleInput] = useState(true);
    const [createVehicle, { isLoading }] = useCreateVehicleMutation();

    const selectedVehicleType = watch('vehicleType');

    useEffect(() => {
        if (
            selectedVehicleType?.label === 'Electric scooter' ||
            selectedVehicleType?.label === 'Bicycle'
        )
            setIsVisibleInput(false);
        else setIsVisibleInput(true);
    }, [selectedVehicleType]);

    const onSubmit: SubmitHandler<ProfileVehicleFormType> = async (
        data: ProfileVehicleFormType
    ) => {
        const response = await createVehicle({
            driverId: 1,
            VehicleType: data.vehicleType.label,
            VehicleId: data.idNumber || '',
            ModelName: data.modelName || '',
            ModelType: data.modelType?.label || '',
        });
        if (response.data)
            notification.showSuccess(`${data.vehicleType.label} create successfully`);
    };

    if (isLoading) return <Loader />;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className={cls.container} data-testid='vehicleForm'>
                <li data-testid='vehicleType'>
                    <Controller
                        name='vehicleType'
                        control={control}
                        render={({ field }) => (
                            <Select
                                field={field}
                                options={vehicleType}
                                placeholder={
                                    <Placeholder
                                        icon={<IconCar addStyle={cls.icon} />}
                                        text='Select vehicle type'
                                    />
                                }
                                label='Vehicle type'
                                error={errors.vehicleType}
                            />
                        )}
                    />
                </li>
                {isVisibleInput && (
                    <li data-testid='modelName'>
                        <Input
                            name='modelName'
                            type='text'
                            label='Model name'
                            placeholder='Enter model name'
                            icon={<IconCar addStyle={cls.icon} />}
                            error={errors.modelName}
                            register={register('modelName')}
                        />
                    </li>
                )}
                {isVisibleInput && (
                    <li data-testid='modelType'>
                        <Controller
                            name='modelType'
                            control={control}
                            render={({ field }) => (
                                <Select
                                    field={field}
                                    options={modelType}
                                    placeholder={
                                        <Placeholder
                                            icon={<IconCar addStyle={cls.icon} />}
                                            text='Select model type'
                                        />
                                    }
                                    label='Model type'
                                    error={errors.modelType}
                                />
                            )}
                        />
                    </li>
                )}
                {isVisibleInput && (
                    <li data-testid='idNumber'>
                        <Input
                            name='idNumber'
                            type='text'
                            label='ID number'
                            placeholder='Wilson'
                            icon={<IconPlate addStyle={cls.icon} />}
                            error={errors.idNumber}
                            register={register('idNumber')}
                        />
                    </li>
                )}
            </ul>
            <Button
                variant='submit'
                type='submit'
                background='primary'
                size='submit'
                className={cls.btn}
            >
                <Text size='body2_font_bold' color='white'>
                    Add Vehicle
                </Text>
            </Button>
        </form>
    );
};
