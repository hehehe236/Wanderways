import { useSelector } from 'react-redux';

import cls from './ProfileName.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { selectProfileGeneral } from '@/store/features/profile/profileSlice.ts';

export const ProfileName = () => {
    const { name, lastName } = useSelector(selectProfileGeneral);

    return (
        <div className={cls.container} data-testid='profileName'>
            <Text size='headline1_bold' variant='center' color='primary'>
                {name || 'Name'}
            </Text>
            <Text size='headline1_bold' variant='center' color='primary'>
                {lastName || ''}
            </Text>
        </div>
    );
};
