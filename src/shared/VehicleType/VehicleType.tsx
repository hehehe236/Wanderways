import { ReactElement } from 'react';

import cls from './VehicleType.module.css';
import { Text } from '@/shared/Text/Text.tsx';

export type VehicleTypeProps = {
    name: string;
    icon: ReactElement;
};

export const VehicleType = (props: VehicleTypeProps) => {
    const { name, icon } = props;
    return (
        <div className={cls.container}>
            <div className={cls.icon}>{icon}</div>
            <Text size='body3_font_bold' variant='left'>
                {name}
            </Text>
        </div>
    );
};
