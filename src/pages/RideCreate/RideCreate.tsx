import cls from './RideCreate.module.css';
import { RideCreateForm } from '@/components/RideCreateForm/RideCreateForm.tsx';
import { useGetRidesQuery } from '@/store/services/rideService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Title } from '@/shared/Title/Title.tsx';

const RideCreate = () => {
    const { isLoading } = useGetRidesQuery({});
    if (isLoading) return <Loader />;
    return (
        <div className={cls.container}>
            <Title title='Deliver parcel' />
            <RideCreateForm />
        </div>
    );
};

export default RideCreate;
