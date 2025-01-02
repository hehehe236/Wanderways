import cls from './ProfileEmail.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import { useEditEmailMutation } from '@/store/services/profileService.ts';
import { UserCredentialsForm } from '@/shared/UserCredentialsForm/UserCredentialsForm.tsx';
import { useTranslation } from 'react-i18next';

const ProfileEmail = () => {
    const { t } = useTranslation();
    const [editProfile, { isLoading }] = useEditEmailMutation();
    return (
        <main className={cls.container}>
            <Title title={t('profileEmail.title')} />
            <UserCredentialsForm
                handleUserAction={editProfile}
                isLoading={isLoading}
                messageSuccess={t('profileEmail.messageSuccess')}
                messageError={t('profileEmail.messageError')}
                btnText={t('btnSubmit')}
            />
        </main>
    );
};

export default ProfileEmail;
