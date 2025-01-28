import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cls from './Header.module.css';
import Logo from '/images/Logo.svg';
import Avatar from '/images/AvatarDefault.png';
import { Text } from '@/shared/Text/Text.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { selectProfilePicture } from '@/store/features/profile/profileSlice.ts';
import { ROUTES } from '@/utils/routes.ts';

const LOGO_TEXT = 'Wanderways';

export const Header = () => {
    const profilePicture = useSelector(selectProfilePicture);

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
            <Link to='/profile' data-testid='headerAvatar'>
                <button type='button' className={cls.container_avatar}>
                    <img src={profilePicture || Avatar} alt='avatar' className={cls.img} />
                </button>
            </Link>
        </header>
    );
};
