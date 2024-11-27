import { Link, useNavigate } from 'react-router-dom';

import cls from './SignOut.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconSignOut } from '@/shared/svg/IconSignOut.tsx';
import { clearCookies } from '@/utils/clearCookies.ts';

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        clearCookies();
        navigate('/signin');
    };
    return (
        <main className={cls.container}>
            <div className={cls.container_icon} data-testid='iconSignOut'>
                <IconSignOut />
            </div>
            <Text size='headline1_bold' color='primary' variant='center' className={cls.title}>
                Are you sure you want to sign out?
            </Text>
            <div className={cls.block_btn}>
                <Link to='/profile' className={cls.btn_cancel} data-testid='btnCancel'>
                    <Text size='body2_font_bold'>Cancel</Text>
                </Link>
                <button
                    type='button'
                    className={cls.btn_yes}
                    onClick={handleSignOut}
                    data-testid='btnYes'
                >
                    <Text size='body2_font_bold'>Yes</Text>
                </button>
            </div>
        </main>
    );
};

export default SignOut;
