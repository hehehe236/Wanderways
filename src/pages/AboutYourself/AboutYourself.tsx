import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import cls from '@/pages/AboutYourself/AboutYourself.module.css';
import { ProfileAvatar } from '@/shared/ProfileAvatar/ProfileAvatar.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { useAboutYourselfMutation } from '@/store/services/authService.ts';
import { UserProfileForm } from '@/shared/UserProfileForm/UserProfileForm.tsx';

const AboutYourself = () => {
    const [aboutYourself, { isLoading }] = useAboutYourselfMutation();
    return (
        <main className={cls.container}>
            <ArrowBack />
            <ProfileAvatar />
            <Text size='headline1_bold' className={cls.title} variant='center'>
                Tell us about yourself
            </Text>
            <UserProfileForm
                handleUserAction={aboutYourself}
                isLoading={isLoading}
                messageSuccess='Success'
                messageError='Error'
                btnText='Finish'
            />
        </main>
    );
};

export default AboutYourself;
