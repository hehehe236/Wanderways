import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from './ArrowBack.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { IconArrowLeft } from '@/shared/svg/IconArrowLeft.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export const ArrowBack = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button type='button' variant='icon' className={cls.container} onClick={handleClick}>
            <div className={cls.container_icon}>
                <IconArrowLeft />
            </div>
            <Text size='body2_font_bold' color='primary'>
                {t('btnBack')}
            </Text>
        </Button>
    );
};
