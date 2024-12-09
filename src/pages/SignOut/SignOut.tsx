import { useNavigate } from 'react-router-dom';

import cls from './SignOut.module.css';
import { IconSignOut } from '@/shared/svg/IconSignOut.tsx';
import { clearCookies } from '@/utils/clearCookies.ts';
import { ROUTES } from '@/utils/routes.ts';
import { DualButtonGroup } from '@/shared/DualButtonGroup/DualButtonGroup.tsx';
import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        clearCookies();
        navigate(ROUTES.SIGNIN.path);
    };

    const handleClickBack = () => navigate(ROUTES.PROFILE.path);

    return (
        <main className={cls.container}>
            <div className={cls.container_icon} data-testid='iconSignOut'>
                <IconTitlePageBlock
                    icon={<IconSignOut />}
                    title='Are you sure you want to sign out?'
                />
            </div>
            <DualButtonGroup
                backgroundLeft='secondary'
                backgroundRight='primary'
                textLeft='Cancel'
                textRight='Yes'
                textSize='body2_font_bold'
                textColorLeft='blue'
                textColorRight='white'
                handleClickLeftBtn={handleClickBack}
                handleClickRightBtn={handleSignOut}
            />
        </main>
    );
};

export default SignOut;
