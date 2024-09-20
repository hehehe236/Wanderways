import cls from './ProfileVehicle.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import { ProfileVehicleForm } from '@/components/ProfileVehicleForm/ProfileVehicleForm.tsx';

const ProfileVehicle = () => {
    return (
        <main className={cls.container}>
            <Title title='Add new vehicle' />
            <ProfileVehicleForm />
        </main>
    );
};

export default ProfileVehicle;
