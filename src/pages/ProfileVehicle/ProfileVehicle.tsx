import { useTranslation } from 'react-i18next';

import cls from './ProfileVehicle.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import { ProfileVehicleForm } from '@/components/ProfileVehicleForm/ProfileVehicleForm.tsx';

const ProfileVehicle = () => {
    const { t } = useTranslation();
    return (
        <main className={cls.container}>
            <Title title={t('profileVehicle.title')} />
            <ProfileVehicleForm />
        </main>
    );
};

export default ProfileVehicle;
