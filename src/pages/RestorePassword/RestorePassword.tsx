import { useEffect, useState } from 'react';

import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import cls from './RestorePassword.module.css';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconLockBig } from '@/shared/svg/IconLockBig.tsx';
import { SendEmailForm } from '@/components/SendEmailForm/SendEmailForm.tsx';

const RestorePassword = () => {
    const [countdown, setCountdown] = useState<number>(0);
    const [isCounting, setIsCounting] = useState<boolean>(true);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (isCounting && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setIsCounting(false);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [countdown, isCounting]);

    const handleFormSubmit = () => {
        setCountdown(60);
        setIsCounting(true);
    };

    return (
        <main className={cls.container}>
            <ArrowBack />
            <div className={cls.container_icon}>
                <IconTitlePageBlock icon={<IconLockBig />} title='Restore password' />
            </div>
            <Text
                size='body3_font_bold'
                color='secondary'
                className={cls.text}
                variant='center'
                data-testid='subtitle'
            >
                Enter an email associated with your account to get a link to reset your password
            </Text>
            <SendEmailForm onSubmit={handleFormSubmit} />
            <div className={cls.block_text} data-testid='additionalText'>
                <Text size='body3_font_bold' color='secondary' data-testid='text'>
                    Didn’t receive an email?
                </Text>
                <Text
                    size='body2_font_bold'
                    color={isCounting ? 'secondary' : 'blue'}
                    data-testid='textResend'
                >
                    {isCounting ? `Resend (${countdown})` : 'Resend'}
                </Text>
            </div>
        </main>
    );
};

export default RestorePassword;
