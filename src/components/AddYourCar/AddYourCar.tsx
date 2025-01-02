import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/Text/Text.tsx';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { AddNew } from '@/shared/AddNew/AddNew.tsx';
import cls from './AddYourCar.module.css';
import { IconVehicle } from '@/shared/svg/IconVehicle.tsx';

export const AddYourCar = () => {
    const { t } = useTranslation();
    return (
        <div data-testid='addYourCar'>
            <Text size='body1_font_bold' className={cls.title}>
                {t('aboutYourself.addCar')}
            </Text>
            <BasisBlock>
                <Link to='#' className={cls.container}>
                    <div className={cls.container_icon_car}>
                        <IconVehicle />
                    </div>
                    <AddNew />
                </Link>
            </BasisBlock>
        </div>
    );
};
