import cls from './ProfileEmail.module.css';
import { ProfileEmailForm } from '@/components/ProfileEmailForm/ProfileEmailForm.tsx';
import { Title } from '@/shared/Title/Title.tsx';

const ProfileEmail = () => {
    return (
        <main className={cls.container}>
            <Title title='Edit email' />
            <ProfileEmailForm />
        </main>
    );
};

export default ProfileEmail;
