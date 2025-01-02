import { useTranslation } from 'react-i18next';

import cls from './ProfilePassword.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import { ProfilePasswordEditForm } from '@/components/ProfilePasswordEditForm/ProfilePasswordEditForm.tsx';

const ProfilePassword = () => {
    const { t } = useTranslation();
    return (
        <main className={cls.container}>
            <Title title={t('profilePassword.title')} />
            <ProfilePasswordEditForm />
        </main>
    );
};

export default ProfilePassword;
