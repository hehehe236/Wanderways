import { Link } from 'react-router-dom';

import { Text } from '@/shared/Text/Text.tsx';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { AddNew } from '@/shared/AddNew/AddNew.tsx';
import cls from './AddYourCar.module.css';
import { IconVehicle } from '@/shared/svg/IconVehicle.tsx';

export const AddYourCar = () => {
    return (
        <div data-testid='addYourCar'>
            <Text size='body1_font_bold' className={cls.title}>
                Add your car
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
