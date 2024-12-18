import { IconProfile } from '@/shared/svg/IconProfile.tsx';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { IconPassword } from '@/shared/svg/IconPassword.tsx';
import { IconCar } from '@/shared/svg/IconCar.tsx';
import { ReactElement } from 'react';
import { IconLang } from '@/shared/svg/IconLang.tsx';

export type ProfileAttributes = {
    icon: ReactElement;
    text: string;
    path: string;
};

const profileAttributes: ProfileAttributes[] = [
    {
        icon: <IconProfile />,
        text: 'Edit profile',
        path: '/profile/general',
    },
    {
        icon: <IconEmail />,
        text: 'Edit email',
        path: '/profile/email',
    },
    {
        icon: <IconPassword />,
        text: 'Edit password',
        path: '/profile/password',
    },
    {
        icon: <IconCar />,
        text: 'My vehicles',
        path: '/profile/vehicles',
    },
    {
        icon: <IconLang />,
        text: 'My language',
        path: '/profile/language',
    },
];

export default profileAttributes;
