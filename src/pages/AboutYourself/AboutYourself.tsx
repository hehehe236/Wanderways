import { useTranslation } from 'react-i18next';

import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import cls from '@/pages/AboutYourself/AboutYourself.module.css';
import { ProfileAvatar } from '@/shared/ProfileAvatar/ProfileAvatar.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { useAboutYourselfMutation } from '@/store/services/authService.ts';
import { UserProfileForm } from '@/shared/UserProfileForm/UserProfileForm.tsx';

const AboutYourself = () => {
    const { t } = useTranslation();
    const [aboutYourself, { isLoading }] = useAboutYourselfMutation();
    return (
        <main className={cls.container}>
            <ArrowBack />
            <ProfileAvatar />
            <Text size='headline1_bold' className={cls.title} variant='center'>
                {t('aboutYourself.title')}
            </Text>
            <UserProfileForm
                handleUserAction={aboutYourself}
                isLoading={isLoading}
                messageSuccess={t('aboutYourself.messageSuccess')}
                messageError={t('aboutYourself.messageError')}
                btnText={t('aboutYourself.btnSubmit')}
            />
        </main>
    );
};

export default AboutYourself;
