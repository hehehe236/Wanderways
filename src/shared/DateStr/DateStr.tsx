import { Text } from '@/shared/Text/Text.tsx';
import { TextVariants } from '@/shared/Text/text-variants.ts';

export type DateStrProps = {
    date: string | undefined;
    size: TextVariants['size'];
    color: TextVariants['color'];
};

export const DateStr = (props: DateStrProps) => {
    const { date, size, color } = props;
    if (!date) return null;
    const dateStr: Date = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    const formattedDate: string = dateStr
        .toLocaleDateString('en-US', options)
        .replace(' at ', ', ');

    return (
        <Text size={size} color={color}>
            {formattedDate}
        </Text>
    );
};
