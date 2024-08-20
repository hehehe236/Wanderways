import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import profileAttributes from '@/utils/db/profileAttributes.tsx';
import { ProfileAttribute } from '@/shared/ProfileAttribute/ProfileAttribute.tsx';
import cls from './ProfileListAttribute.module.css';

export const ProfileListAttribute = () => {
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
