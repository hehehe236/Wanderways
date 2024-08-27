import cls from './AvailableDriversCount.module.css';
import { Text } from '@/shared/Text/Text.tsx';

export const AvailableDriversCount = ({ countDrivers }: { countDrivers: number }) => {
    return (
        <div className={cls.container} data-testid='availableDriversCount'>
            <Text size='headline1_bold'>Available drivers</Text>
            <div className={cls.container_count}>{countDrivers}</div>
        </div>
    );
};
