import cls from './VehicleCard.module.css';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { IconVehicle } from '@/shared/svg/IconVehicle.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export type VehicleCardProps = {
    modelName: string;
    carType: string;
    isSelected: boolean;
    onClick: () => void;
};

export const VehicleCard = (props: VehicleCardProps) => {
    const { modelName, carType, isSelected = false, onClick } = props;

    return (
        <div onClick={onClick} className={`${isSelected ? cls.selected : ''}`}>
            <BasisBlock>
                <div className={cls.container_icon_car} onClick={onClick}>
                    <IconVehicle />
                </div>
                <Text size='body2_font_bold' color='primary' className={cls.modelName}>
                    {modelName}
                </Text>
                <Text size='body4_font_bold' color='secondary'>
                    {carType}
                </Text>
            </BasisBlock>
        </div>
    );
};
