import cls from './VehicleCard.module.css';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { IconVehicle } from '@/shared/svg/IconVehicle.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconDelete } from '@/shared/svg/IconDelete.tsx';

export type VehicleCardProps = {
    modelName?: string;
    carType: string;
    isSelected?: boolean;
    onClick?: () => void;
    handelDelete?: (id: number) => void;
    VehicleId?: number;
};

export const VehicleCard = (props: VehicleCardProps) => {
    const { modelName, carType, isSelected = false, onClick, handelDelete, VehicleId } = props;

    return (
        <div onClick={onClick} className={`${isSelected ? cls.selected : ''}`}>
            <BasisBlock>
                <div className={cls.container_icon_car} onClick={onClick}>
                    <IconVehicle />
                </div>
                <div className={cls.wrap_text}>
                    <Text size='body2_font_bold' color='primary' className={cls.modelName}>
                        {modelName}
                    </Text>
                </div>
                <Text size='body4_font_bold' color='secondary'>
                    {carType}
                </Text>
                {VehicleId && handelDelete && (
                    <Button type='button' variant='icon' onClick={() => handelDelete(VehicleId)}>
                        <IconDelete addStyle={cls.icon_delete} />
                    </Button>
                )}
            </BasisBlock>
        </div>
    );
};
