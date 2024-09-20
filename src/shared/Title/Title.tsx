import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import cls from './Title.module.css';

export const Title = ({ title }: { title: string }) => {
    return (
        <>
            <ArrowBack />
            <Text size='headline1_bold' color='primary' className={cls.title}>
                {title}
            </Text>
        </>
    );
};
