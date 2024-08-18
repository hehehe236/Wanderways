import { IconProfile } from '@/shared/svg/IconProfile.tsx';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { IconPassword } from '@/shared/svg/IconPassword.tsx';
import { IconCar } from '@/shared/svg/IconCar.tsx';
import { ReactElement } from 'react';

export type ProfileAttributes = {
    icon: ReactElement;
    text: string;
};

const profileAttributes: ProfileAttributes[] = [
    {
        icon: <IconProfile />,
        text: 'Edit profile',
    },
    {
        icon: <IconEmail />,
        text: 'Edit email',
    },
    {
        icon: <IconPassword />,
        text: 'Edit password',
    },
    {
        icon: <IconCar />,
        text: 'My vehicles',
    },
];

export default profileAttributes;
