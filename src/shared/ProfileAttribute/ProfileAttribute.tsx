import { cloneElement, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import cls from './ProfileAttribute.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';

export type ProfileAttributeProps = {
    icon: ReactElement;
    text: string;
    path: string;
};

export const ProfileAttribute = (props: ProfileAttributeProps) => {
    const { icon, text, path } = props;

    return (
        <Link to={`${path}`} className={cls.container}>
            <div className={cls.container_text}>
                {cloneElement(icon, { addStyle: cls.icon })}
                <Text size='headline2_bold' color='primary'>
                    {text}
                </Text>
            </div>
            <IconArrow2Right />
        </Link>
    );
};
