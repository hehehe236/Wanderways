import { useTranslation } from 'react-i18next';

import cls from './ProfileGeneral.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import { useEditProfileMutation } from '@/store/services/profileService.ts';
import { UserProfileForm } from '@/shared/UserProfileForm/UserProfileForm.tsx';

const ProfileGeneral = () => {
    const { t } = useTranslation();
    const [editProfile, { isLoading }] = useEditProfileMutation();
    return (
        <main className={cls.container}>
            <Title title={t('profileGeneral.title')} />
            <UserProfileForm
                handleUserAction={editProfile}
                isLoading={isLoading}
                messageSuccess={t('profileGeneral.messageSuccess')}
                messageError={t('profileGeneral.messageError')}
                btnText={t('btnSubmit')}
            />
        </main>
    );
};

export default ProfileGeneral;
