import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from './SignIn.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import Logo from '/images/Logo.svg';
import { useSigninMutation } from '@/store/services/authService.ts';
import { UserCredentialsForm } from '@/shared/UserCredentialsForm/UserCredentialsForm.tsx';
import { SocialAuthIcons } from '@/shared/SocialAuthIcons/SocialAuthIcons.tsx';
import { ROUTES } from '@/utils/routes.ts';

const SignIn = () => {
    const { t } = useTranslation();
    const [signIn, { isLoading }] = useSigninMutation();
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
                {t('signIn.title')}
            </Text>
            <UserCredentialsForm
                handleUserAction={signIn}
                isLoading={isLoading}
                messageSuccess={t('signIn.messageSuccess')}
                messageError={t('signIn.messageError')}
                btnText={t('signIn.btnSubmit')}
                additionNode={
                    <Link to={ROUTES.RESTORE_PASSWORD.path}>
                        <Text
                            size='body2_font_bold'
                            color='blue'
                            variant='right'
                            className={cls.restorePassword}
                        >
                            {t('signIn.conditions')}
                        </Text>
                    </Link>
                }
            />
            <SocialAuthIcons />
            <div className={cls.block_text}>
                <Text size='body3_font_bold' color='secondary' data-testid='text'>
                    {t('signIn.subtitle')}
                </Text>
                <Link to={ROUTES.SIGNUP.path} data-testid='linkRedirect'>
                    <Text size='body2_font_bold' color='blue'>
                        {t('signIn.link')}
                    </Text>
                </Link>
            </div>
        </main>
    );
};

export default SignIn;
