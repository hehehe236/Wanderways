import { useState } from 'react';

import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { ProfileAttribute } from '@/shared/ProfileAttribute/ProfileAttribute.tsx';
import cls from './ProfileListAttribute.module.css';
import { getProfileAttributes } from '@/utils/db/profileAttributes.tsx';

export const ProfileListAttribute = () => {
    const [profileAttributes] = useState(getProfileAttributes());

    return (
        <BasisBlock>
            <ul data-testid='profileAttributes'>
                {profileAttributes.map(({ icon, text, path }, index) => (
                    <li key={index} className={cls.listItem}>
                        <ProfileAttribute icon={icon} text={text} path={path} />
                    </li>
                ))}
            </ul>
        </BasisBlock>
    );
};
