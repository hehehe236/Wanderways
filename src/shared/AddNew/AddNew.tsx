import { Link } from 'react-router-dom';

import cls from './AddNew.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconAdd } from '@/shared/svg/IconAdd.tsx';

export const AddNew = () => {
    return (
        <Link to={'vehicle'} className={cls.container}>
            <Text size={'body2_font_bold'} color={'blue'}>
                Add new
            </Text>
            <IconAdd />
        </Link>
    );
};
