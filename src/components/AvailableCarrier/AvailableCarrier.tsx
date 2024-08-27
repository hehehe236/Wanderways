import cls from './AvailableCarrier.module.css';
import { IconWheel } from '@/shared/svg/IconWheel.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconArrow3Right } from '@/shared/svg/IconArrow3Right.tsx';

export type AvailableCarrierProps = {
    name: string | undefined;
    lastName: string | undefined;
    drivingExperience: string | undefined;
    vehicles: string | undefined;
};

export const AvailableCarrier = (props: AvailableCarrierProps) => {
    const { name, lastName, drivingExperience, vehicles } = props;
    return (
        <div className={cls.container}>
            <div className={cls.container_wheel}>
                <IconWheel addStyle={cls.wheel} />
            </div>
            <div className={cls.container_text}>
                <Text size='headline2_bold' color='primary'>
                    {`${name} ${lastName}`}
                </Text>
                <div>
                    <span className={cls.vehicle}>{vehicles} | </span>
                    <span className={cls.vehicle}>{drivingExperience} driver</span>
                </div>
            </div>
            <Button type='button' variant='icon' className={cls.container_arrow}>
                <IconArrow3Right addStyle={cls.icon_arrow} />
            </Button>
        </div>
    );
};
