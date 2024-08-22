import cls from './ProfileEmail.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ProfileEmailForm } from '@/components/ProfileEmailForm/ProfileEmailForm.tsx';

const ProfileEmail = () => {
    return (
        <main className={cls.container}>
            <ArrowBack />
            <Text size='headline1_bold' color='primary' className={cls.title}>
                Edit email
            </Text>
            <ProfileEmailForm />
        </main>
    );
};

export default ProfileEmail;
