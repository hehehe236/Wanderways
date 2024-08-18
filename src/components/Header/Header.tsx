import { Link, useLocation } from 'react-router-dom';

import cls from './Header.module.css';

import Logo from '/images/Logo.svg';
import Avatar from '/images/AvatarDefault.png';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { selectProfilePicture } from '@/store/features/profile/profileSlice.ts';
import { useSelector } from 'react-redux';

export const Header = () => {
    const profilePicture = useSelector(selectProfilePicture);
    const { pathname } = useLocation();

    return (
        <header className={cls.container}>
            <Link to='/'>
                <Button type='button' variant='icon' className={cls.but_container}>
                    <img src={Logo} alt='logo' width={40} height={40} />
                    <Text size='display_font_bold' color='primary'>
                        Wanderways
                    </Text>
                </Button>
            </Link>
            {pathname !== '/profile' && (
                <Link to='profile' data-testid='headerAvatar'>
                    <button type='button' className={cls.container_avatar}>
                        <img src={profilePicture || Avatar} alt='avatar' className={cls.img} />
                    </button>
                </Link>
            )}
        </header>
    );
};
