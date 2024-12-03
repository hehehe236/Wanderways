import { Link } from 'react-router-dom';

import cls from './HeaderWithoutAvatar.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import Logo from '/images/Logo.svg';
import { Text } from '@/shared/Text/Text.tsx';
import { ROUTES } from '@/utils/routes.ts';

const LOGO_TEXT = 'Wanderways';

export const HeaderWithoutAvatar = () => {
    return (
        <header className={cls.container}>
            <Link to={ROUTES.HOME.path}>
                <Button type='button' variant='icon' className={cls.but_container}>
                    <img src={Logo} alt='logo' width={40} height={40} />
                    <Text size='display_font_bold' color='primary'>
                        {LOGO_TEXT}
                    </Text>
                </Button>
            </Link>
        </header>
    );
};
