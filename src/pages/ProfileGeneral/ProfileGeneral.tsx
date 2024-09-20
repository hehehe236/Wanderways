import cls from './ProfileGeneral.module.css';
import { ProfileEditForm } from '@/components/ProfileEditForm/ProfileEditForm.tsx';
import { Title } from '@/shared/Title/Title.tsx';

const ProfileGeneral = () => {
    return (
        <main className={cls.container}>
            <Title title='Edit Profile' />
            <ProfileEditForm />
        </main>
    );
};

export default ProfileGeneral;
