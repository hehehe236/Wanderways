import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import cls from './SignUp.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import Logo from '/images/Logo.svg';
import { useSignupMutation } from '@/store/services/authService.ts';
import { UserCredentialsForm } from '@/shared/UserCredentialsForm/UserCredentialsForm.tsx';
import { SocialAuthIcons } from '@/shared/SocialAuthIcons/SocialAuthIcons.tsx';
import { ROUTES } from '@/utils/routes.ts';

const SignUp = () => {
    const { t } = useTranslation();
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
                {t('signUp.title')}
            </Text>
            <UserCredentialsForm
                handleUserAction={signUp}
                isLoading={isLoading}
                messageSuccess={t('signUp.messageSuccess')}
                messageError={t('signUp.messageError')}
                btnText={t('signUp.btnSubmit')}
                additionNode={
                    <div className={cls.block_text}>
                        <Text size='body4_font_bold' color='secondary' data-testid='textConditions'>
                            {t('signUp.conditions')}
                        </Text>
                        <Link to='#' data-testid='linkConditions'>
                            <Text size='body4_font_bold' color='blue'>
                                {t('signUp.terms')}
                            </Text>
                        </Link>
                    </div>
                }
            />
            <SocialAuthIcons />
            <div className={cls.block_text}>
                <Text size='body3_font_bold' color='secondary' data-testid='text'>
                    {t('signUp.subtitle')}
                </Text>
                <Link to={ROUTES.SIGNIN.path} data-testid='linkRedirect'>
                    <Text size='body2_font_bold' color='blue'>
                        {t('signUp.link')}
                    </Text>
                </Link>
            </div>
        </main>
    );
};

export default SignUp;
