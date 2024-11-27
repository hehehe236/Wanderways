import cls from './AddNew.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconAdd } from '@/shared/svg/IconAdd.tsx';

export const AddNew = () => {
    return (
        <div className={cls.container} data-testid='addNew'>
            <Text size='body2_font_bold' color='blue'>
                Add new
            </Text>
            <IconAdd />
        </div>
    );
};
