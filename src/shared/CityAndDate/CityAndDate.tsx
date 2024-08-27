import cls from './CityAndDate.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { DateStr } from '@/shared/DateStr/DateStr.tsx';

export type CityAndDateProps = {
    city: string | undefined;
    date: string | undefined;
};

export const CityAndDate = (props: CityAndDateProps) => {
    const { city, date } = props;
    return (
        <div className={cls.container}>
            <Text size='body1_font_bold' color='primary'>
                {city}
            </Text>
            <DateStr date={date} size='body4_font_bold' color='secondary' />
        </div>
    );
};
