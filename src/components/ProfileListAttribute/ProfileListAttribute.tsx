import { useState } from 'react';

import { ProfileAttribute } from '@/shared/ProfileAttribute/ProfileAttribute.tsx';
import cls from './ProfileListAttribute.module.css';
import { getProfileAttributes } from '@/utils/db/profileAttributes.tsx';

export const ProfileListAttribute = () => {
    const [profileAttributes] = useState(getProfileAttributes());

    return (
        <ul data-testid='profileAttributes' className={cls.container}>
            {profileAttributes.map(({ icon, text, path }, index) => (
                <li key={index} className={cls.listItem}>
                    <ProfileAttribute icon={icon} text={text} path={path} />
                </li>
            ))}
        </ul>
    );
};
