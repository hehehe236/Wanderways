import cls from './RideCreate.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { RideCreateForm } from '@/components/RideCreateForm/RideCreateForm.tsx';
import { useGetRidesQuery } from '@/store/services/rideService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';

const RideCreate = () => {
    const { isLoading } = useGetRidesQuery({});
    if (isLoading) return <Loader />;
    return (
        <div className={cls.container}>
            <ArrowBack />
            <Text size='headline1_bold' color='primary' className={cls.title}>
                Deliver parcel
            </Text>
            <RideCreateForm />
        </div>
    );
};

export default RideCreate;
