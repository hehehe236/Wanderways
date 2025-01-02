import { IconProfile } from '@/shared/svg/IconProfile.tsx';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { IconPassword } from '@/shared/svg/IconPassword.tsx';
import { IconCar } from '@/shared/svg/IconCar.tsx';
import { ReactElement } from 'react';
import { IconLang } from '@/shared/svg/IconLang.tsx';
import { t } from 'i18next';

export type ProfileAttributes = {
    icon: ReactElement;
    text: string;
    path: string;
};

export const getProfileAttributes = (): ProfileAttributes[] => [
    {
        icon: <IconProfile />,
        text: t('profile.editProfile'),
        path: '/profile/general',
    },
    {
        icon: <IconEmail />,
        text: t('profile.editEmail'),
        path: '/profile/email',
    },
    {
        icon: <IconPassword />,
        text: t('profile.editPassword'),
        path: '/profile/password',
    },
    {
        icon: <IconCar />,
        text: t('profile.myVehicles'),
        path: '/profile/vehicles',
    },
    {
        icon: <IconLang />,
        text: t('profile.myLanguage'),
        path: '/profile/language',
    },
];
