import cls from './AvailableDriversCount.module.css';
import { Text } from '@/shared/Text/Text.tsx';

export type AvailableDriversCountProps = {
    countDrivers: number;
    title: string;
};

export const AvailableDriversCount = (props: AvailableDriversCountProps) => {
    const { countDrivers, title } = props;
    return (
        <div className={cls.container} data-testid='availableDriversCount'>
            <Text size='headline1_bold'>{title}</Text>
            <div className={cls.container_count}>{countDrivers}</div>
        </div>
    );
};
