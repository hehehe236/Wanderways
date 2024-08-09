import { Control, Controller, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import cls from './VehicleSelection.module.css';
import { VehicleCard } from '@/shared/VehicleCard/VehicleCard.tsx';
import { vehicles } from '@/utils/chooseVehicle.ts';
import { Text } from '@/shared/Text/Text.tsx';
import { RideFormInputType } from '@/components/RideCreateForm/RideFormInputType.ts';

export type VehiclesSelectionProps = {
    control: Control<RideFormInputType, 'vehicleId'>;
    name: keyof RideFormInputType;
    error: Merge<FieldError, FieldErrorsImpl<{ vehicleId: number }>> | undefined;
};

export const VehicleSelection = (props: VehiclesSelectionProps) => {
    const { control, name, error } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className={cls.container}>
                    <ul className={cls.list_cars}>
                        {vehicles.map((vehicle) => (
                            <li key={vehicle.idNumber}>
                                <VehicleCard
                                    modelName={vehicle.modelName}
                                    carType={vehicle.carType}
                                    isSelected={vehicle.idNumber === field.value}
                                    onClick={() => {
                                        field.onChange(vehicle.idNumber);
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                    {error && (
                        <Text size={'body4_font_bold'} color={'red'} className={cls.error}>
                            {error.message}
                        </Text>
                    )}
                </div>
            )}
        />
    );
};
