import { Link } from 'react-router-dom';

import cls from './Login.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import Logo from '/images/Logo.svg';
import { useSigninMutation } from '@/store/services/authService.ts';
import { UserCredentialsForm } from '@/shared/UserCredentialsForm/UserCredentialsForm.tsx';
import { SocialAuthIcons } from '@/shared/SocialAuthIcons/SocialAuthIcons.tsx';

const Login = () => {
    const [login, { isLoading }] = useSigninMutation();
    return (
        <main className={cls.container}>
            <img
                src={Logo}
                alt='logo'
                width={80}
                height={80}
                className={cls.logo}
                data-testid='logo'
            />
            <Text
                size='headline1_bold'
                color='primary'
                variant='center'
                className={cls.title}
                data-testid='title'
            >
                Log in to your account
            </Text>
            <UserCredentialsForm
                handleUserAction={login}
                isLoading={isLoading}
                messageSuccess='Login is successful'
                messageError='Login error'
                btnText='Sign in'
                additionNode={
                    <Link to='#'>
                        <Text
                            size='body2_font_bold'
                            color='blue'
                            variant='right'
                            className={cls.restorePassword}
                        >
                            Restore password
                        </Text>
                    </Link>
                }
            />
            <SocialAuthIcons />
            <div className={cls.block_text}>
                <Text size='body3_font_bold' color='secondary' data-testid='text'>
                    Don’t have an account?
                </Text>
                <Link to='#' data-testid='linkRedirect'>
                    <Text size='body2_font_bold' color='blue'>
                        Sign up
                    </Text>
                </Link>
            </div>
        </main>
    );
};

export default Login;
