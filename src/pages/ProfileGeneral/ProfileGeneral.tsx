import cls from './ProfileGeneral.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ProfileEditForm } from '@/components/ProfileEditForm/ProfileEditForm.tsx';

const ProfileGeneral = () => {
    return (
        <main className={cls.container}>
            <ArrowBack />
            <Text size='headline1_bold' color='primary' className={cls.title}>
                Edit Profile
            </Text>
            <ProfileEditForm />
        </main>
    );
};

export default ProfileGeneral;
