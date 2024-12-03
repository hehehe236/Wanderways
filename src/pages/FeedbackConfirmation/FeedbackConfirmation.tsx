import { Link } from 'react-router-dom';
import cls from './FeedbackConfirmation.module.css';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';
import { IconCheckmark } from '@/shared/svg/IconCheckmark.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ROUTES } from '@/utils/routes.ts';

const FeedbackConfirmation = () => {
    return (
        <main className={cls.container}>
            <div className={cls.iconTitleWrapper}>
                <IconTitlePageBlock icon={<IconCheckmark />} title='Thanks for the feedback!' />
            </div>
            <ul className={cls.btn_block}>
                <li>
                    <Link
                        to={ROUTES.SIGNIN.path}
                        className={cls.btn_signin}
                        data-testid='btnSignIn'
                    >
                        <Text size='body2_font_bold' color='white'>
                            Sign In
                        </Text>
                    </Link>
                </li>
                <li>
                    <Link
                        to={ROUTES.SIGNUP.path}
                        className={cls.btn_signup}
                        data-testid='btnSignUp'
                    >
                        <Text size='body2_font_bold' color='blue'>
                            Sign Up
                        </Text>
                    </Link>
                </li>
            </ul>
        </main>
    );
};

export default FeedbackConfirmation;
