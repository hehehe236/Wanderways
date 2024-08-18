import { cloneElement, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import cls from './ProfileAttribute.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconArrow2Right } from '@/shared/svg/IconArrow2Right.tsx';

export type ProfileAttributeProps = {
    icon: ReactElement;
    text: string;
};

export const ProfileAttribute = (props: ProfileAttributeProps) => {
    const { icon, text } = props;

    return (
        <div className={cls.container}>
            <div className={cls.container_text}>
                {cloneElement(icon, { addStyle: cls.icon })}
                <Text size='headline2_bold' color='primary'>
                    {text}
                </Text>
            </div>
            <Link to=''>
                <Button type='button' variant='icon'>
                    <IconArrow2Right />
                </Button>
            </Link>
        </div>
    );
};
