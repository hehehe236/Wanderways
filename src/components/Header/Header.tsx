import { Link } from 'react-router-dom';

import cls from './Header.module.css';

import Logo from '@/shared/svg/Logo.svg';
import Avatar from '@/shared/svg/Avatar.png';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';

export const Header = () => {
    return (
        <header className={cls.container}>
            <Link to={'/'}>
                <Button type={'button'} variant={'icon'} className={cls.but_container}>
                    <img src={Logo} alt='logo' width={40} height={40} />
                    <Text size={'display_font_bold'} color={'primary'}>
                        Wanderways
                    </Text>
                </Button>
            </Link>
            <Button type={'button'} variant={'icon'}>
                <img src={Avatar} alt='avatar' width={56} height={56} />
            </Button>
        </header>
    );
};
