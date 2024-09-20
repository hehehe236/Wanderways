import { VehicleCard } from '@/shared/VehicleCard/VehicleCard.tsx';
import cls from './VehicleList.module.css';
import { useSelector } from 'react-redux';
import { selectVehicles } from '@/store/features/vehicles/vehicleSlice.ts';
import { useDeleteVehicleMutation } from '@/store/services/vehicleService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';

export type Vehicle = {
    VehicleId: number;
    VehicleType: string;
    ModelName?: string;
};

export const VehicleList = () => {
    const vehicles = useSelector(selectVehicles);
    const [deleteVehicle, { isLoading }] = useDeleteVehicleMutation();

    const handelClick = (VehicleId: number) => deleteVehicle(VehicleId);

    if (isLoading) return <Loader />;

    return (
        <ul className={cls.container} data-testid='vehicleList'>
            {vehicles?.map(({ ModelName, VehicleType, VehicleId }: Vehicle) => {
                return (
                    <li key={VehicleId} className={cls.item}>
                        <VehicleCard
                            modelName={ModelName}
                            carType={VehicleType}
                            handelDelete={handelClick}
                            VehicleId={VehicleId}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
