import { Link } from 'react-router-dom';

import cls from './SignUp.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import Logo from '/images/Logo.svg';
import { useSignupMutation } from '@/store/services/authService.ts';
import { UserCredentialsForm } from '@/shared/UserCredentialsForm/UserCredentialsForm.tsx';
import { SocialAuthIcons } from '@/shared/SocialAuthIcons/SocialAuthIcons.tsx';

const SignUp = () => {
    const [signUp, { isLoading }] = useSignupMutation();
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
                Create an account
            </Text>
            <UserCredentialsForm
                handleUserAction={signUp}
                isLoading={isLoading}
                messageSuccess='SignUp is successful'
                messageError='SignUp error'
                btnText='Sign Up'
                additionNode={
                    <div className={cls.block_text}>
                        <Text size='body4_font_bold' color='secondary' data-testid='textConditions'>
                            By signing up you agree with out
                        </Text>
                        <Link to='#' data-testid='linkConditions'>
                            <Text size='body4_font_bold' color='blue'>
                                Terms & Conditions
                            </Text>
                        </Link>
                    </div>
                }
            />
            <SocialAuthIcons />
            <div className={cls.block_text}>
                <Text size='body3_font_bold' color='secondary' data-testid='text'>
                    Already have an account?
                </Text>
                <Link to='/signin' data-testid='linkRedirect'>
                    <Text size='body2_font_bold' color='blue'>
                        Sign In
                    </Text>
                </Link>
            </div>
        </main>
    );
};

export default SignUp;
