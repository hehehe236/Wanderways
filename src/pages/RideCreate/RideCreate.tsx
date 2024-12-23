import cls from './RideCreate.module.css';
import { RideCreateForm } from '@/components/RideCreateForm/RideCreateForm.tsx';
import { useGetRidesQuery } from '@/store/services/rideService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Title } from '@/shared/Title/Title.tsx';
import { useTranslation } from 'react-i18next';

const RideCreate = () => {
    const { t } = useTranslation();
    const { isLoading } = useGetRidesQuery({});
    if (isLoading) return <Loader />;
    return (
        <div className={cls.container}>
            <Title title={t('rideCreate.title')} />
            <RideCreateForm />
        </div>
    );
};

export default RideCreate;
