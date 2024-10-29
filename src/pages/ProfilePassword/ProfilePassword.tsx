import cls from './ProfilePassword.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import { ProfilePasswordEditForm } from '@/components/ProfilePasswordEditForm/ProfilePasswordEditForm.tsx';

const ProfilePassword = () => {
    return (
        <main className={cls.container}>
            <Title title='Edit password' />
            <ProfilePasswordEditForm />
        </main>
    );
};

export default ProfilePassword;
