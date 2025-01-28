import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from './AddNew.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconAdd } from '@/shared/svg/IconAdd.tsx';
import { ROUTES } from '@/utils/routes.ts';

export const AddNew = () => {
    const { t } = useTranslation();
    return (
        <Link className={cls.container} to={ROUTES.NEW_VEHICLE.path} data-testid='addNew'>
            <Text size='body2_font_bold' color='blue'>
                {t('rideCreate.addNew')}
            </Text>
            <IconAdd />
        </Link>
    );
};
