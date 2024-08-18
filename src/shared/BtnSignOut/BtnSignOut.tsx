import cls from './BtnSignOut.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { IconLogOut } from '@/shared/svg/IconLogOut.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export const BtnSignOut = () => {
    return (
        <Button
            type='button'
            variant='submit'
            size='submit'
            className={cls.btn}
            background='secondary'
        >
            <div className={cls.text_btn}>
                <IconLogOut addStyle={cls.icon_signout} />
                <Text size='body2_font_bold' color='blue' className={cls.text}>
                    Sign out
                </Text>
            </div>
        </Button>
    );
};
