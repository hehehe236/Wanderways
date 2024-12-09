import { Link } from 'react-router-dom';

import cls from './VerifiedEmail.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { IconCheckmark } from '@/shared/svg/IconCheckmark.tsx';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';

const VerifiedEmail = () => {
    return (
        <main className={cls.container}>
            <div className={cls.container_icon} data-testid='iconCheckmark'>
                <IconTitlePageBlock icon={<IconCheckmark />} title='Email verified' />
            </div>
            <Link to='/' className={cls.link} data-testid='btnContinue'>
                <Text size='body2_font_bold' color='white'>
                    Continue
                </Text>
            </Link>
        </main>
    );
};

export default VerifiedEmail;
