import { useTranslation } from 'react-i18next';

import cls from './ProfileLanguage.module.css';
import { Title } from '@/shared/Title/Title.tsx';
import i18next from 'i18next';
import { Locals } from '@/utils/locals.ts';
import { IconFlagUK } from '@/shared/svg/IconFlagUK.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { IconFlagEN } from '@/shared/svg/IconFlagEN.tsx';

const ProfileLanguage = () => {
    const { t } = useTranslation();
    const currentLanguage = i18next.language;

    return (
        <main className={cls.container}>
            <Title title={t('profileLanguage.title')} />
            <div className={cls.container_btn}>
                <button
                    disabled={currentLanguage === Locals.EN.lang}
                    type='button'
                    onClick={() => i18next.changeLanguage(Locals.EN.lang)}
                    className={`${cls.btn} ${currentLanguage === Locals.EN.lang ? cls.active : ''}`}
                >
                    <div>
                        <IconFlagEN />
                        <Text size='headline2_bold' color='primary' className={cls.text}>
                            English
                        </Text>
                    </div>
                </button>
                <button
                    disabled={currentLanguage === Locals.UA.lang}
                    type='button'
                    onClick={() => i18next.changeLanguage(Locals.UA.lang)}
                    className={`${cls.btn} ${currentLanguage === Locals.UA.lang ? cls.active : ''}`}
                >
                    <div>
                        <IconFlagUK />
                        <Text size='headline2_bold' color='primary' className={cls.text}>
                            Українська
                        </Text>
                    </div>
                </button>
            </div>
        </main>
    );
};

export default ProfileLanguage;
