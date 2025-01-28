import { VehicleType } from '@/shared/VehicleType/VehicleType.tsx';
import { IconVehicleCar } from '@/shared/svg/IconVehicleCar.tsx';
import { IconVehicleMotorcycle } from '@/shared/svg/IconVehicleMotorcycle.tsx';
import { IconVehicleScooter } from '@/shared/svg/IconVehicleScooter.tsx';
import { IconVehicleBicycle } from '@/shared/svg/IconVehicleBicycle.tsx';

export const vehicleTypeEn = [
    { value: '1', label: <VehicleType name='Car' icon={<IconVehicleCar />} /> },
    { value: '2', label: <VehicleType name='Motorcycle' icon={<IconVehicleMotorcycle />} /> },
    { value: '3', label: <VehicleType name='Electric scooter' icon={<IconVehicleScooter />} /> },
    { value: '4', label: <VehicleType name='Bicycle' icon={<IconVehicleBicycle />} /> },
];

export const vehicleTypeUk = [
    { value: '1', label: <VehicleType name='Автомобіль' icon={<IconVehicleCar />} /> },
    { value: '2', label: <VehicleType name='Мотоцикл' icon={<IconVehicleMotorcycle />} /> },
    { value: '3', label: <VehicleType name='Електросамокат' icon={<IconVehicleScooter />} /> },
    { value: '4', label: <VehicleType name='Велосипед' icon={<IconVehicleBicycle />} /> },
];
