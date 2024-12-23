import cls from './AddNew.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconAdd } from '@/shared/svg/IconAdd.tsx';
import { useTranslation } from 'react-i18next';

export const AddNew = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.container} data-testid='addNew'>
            <Text size='body2_font_bold' color='blue'>
                {t('rideCreate.addNew')}
            </Text>
            <IconAdd />
        </div>
    );
};
