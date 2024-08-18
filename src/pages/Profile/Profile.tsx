import cls from './Profile.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { ProfileAvatar } from '@/shared/ProfileAvatar/ProfileAvatar.tsx';
import { ProfileName } from '@/shared/ProfileName/ProfileName.tsx';
import { ProfileListAttribute } from '@/components/ProfileListAttribute/ProfileListAttribute.tsx';
import { BtnSignOut } from '@/shared/BtnSignOut/BtnSignOut.tsx';

const Profile = () => {
    return (
        <main className={cls.container}>
            <ArrowBack />
            <ProfileAvatar />
            <ProfileName />
            <ProfileListAttribute />
            <BtnSignOut />
        </main>
    );
};

export default Profile;
