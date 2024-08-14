import React from 'react';
import { Link } from 'react-router-dom';

import cls from './ParcelManager.module.css';
import { Text } from '@/shared/Text/Text.tsx';

export type ParcelManagerProps = {
    text: string;
    icon: React.ReactNode;
    path: string;
};
export const ParcelManager = ({ text, icon, path }: ParcelManagerProps) => {
    return (
        <Link to={path} state={{ tokenId: 1 }}>
            <button className={cls.container} type='button'>
                <div className={cls.container_icon}>{icon}</div>
                <Text size='body2_font_bold' color='primary'>
                    {text}
                </Text>
            </button>
        </Link>
    );
};
