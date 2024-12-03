import { ReactNode } from 'react';

import cls from './IconTitlePageBlock.module.css';
import { Text } from '@/shared/Text/Text.tsx';

export type IconTitleBlockProps = {
    icon: ReactNode;
    title: string;
};

export const IconTitlePageBlock = ({ icon, title }: IconTitleBlockProps) => {
    return (
        <div className={cls.container} data-testid='iconTitleBlock'>
            <div className={cls.container_icon}>{icon}</div>
            <Text size='headline1_bold' color='primary' variant='center' data-testid='title'>
                {title}
            </Text>
        </div>
    );
};
