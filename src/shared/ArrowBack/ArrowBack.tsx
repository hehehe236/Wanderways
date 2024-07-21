import { useNavigate } from 'react-router-dom';

import cls from './ArrowBack.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { ArrowLeft } from '@/shared/svg/ArrowLeft.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export const ArrowBack = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button type="button" variant={'icon'} className={cls.container} onClick={handleClick}>
            <div className={cls.container_icon}>
                <ArrowLeft />
            </div>
            <Text size={'body2_font_bold'} color={'primary'}>Back</Text>
        </Button>
    );
};