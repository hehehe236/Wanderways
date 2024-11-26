import { Link } from 'react-router-dom';

import cls from './VerifiedEmail.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconCheckmark } from '@/shared/svg/IconCheckmark.tsx';

const VerifiedEmail = () => {
    return (
        <main className={cls.container}>
            <div className={cls.container_icon} data-testid='iconCheckmark'>
                <IconCheckmark />
            </div>
            <Text size='headline1_bold' color='primary' variant='center' className={cls.title}>
                Email verified
            </Text>
            <Link to='/' className={cls.link} data-testid='btnContinue'>
                <Text size='body2_font_bold' color='white'>
                    Continue
                </Text>
            </Link>
        </main>
    );
};

export default VerifiedEmail;
