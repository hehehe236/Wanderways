import cls from './ProfileGeneral.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import { useEditProfileMutation } from '@/store/services/profileService.ts';
import { UserProfileForm } from '@/shared/UserProfileForm/UserProfileForm.tsx';

const ProfileGeneral = () => {
    const [editProfile, { isLoading }] = useEditProfileMutation();
    return (
        <main className={cls.container}>
            <Title title='Edit Profile' />
            <UserProfileForm
                handleUserAction={editProfile}
                isLoading={isLoading}
                messageSuccess='Profile changed successfully'
                messageError='Error updating profile'
                btnText='Save changes'
            />
        </main>
    );
};

export default ProfileGeneral;
