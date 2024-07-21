import { Text } from '@/shared/Text/Text.tsx';

export const DateStr = ({ date }: { date: string }) => {
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

    return <Text size={"body2_font_bold"} color={'primary'} >{formattedDate}</Text>
};
