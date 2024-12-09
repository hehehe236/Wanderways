import { useNavigate } from 'react-router-dom';

import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';
import { IconQuestion } from '@/shared/svg/IconQuestion.tsx';
import cls from './ConfirmDelivery.module.css';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { IconParcelTypeBlock } from '@/shared/IconParcelTypeBlock/IconParcelTypeBlock.tsx';
import { IconDriverBlock } from '@/shared/IconDriverBlock/IconDriverBlock.tsx';
import { ROUTES } from '@/utils/routes.ts';
import { DualButtonGroup } from '@/shared/DualButtonGroup/DualButtonGroup.tsx';

const ConfirmDelivery = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate(ROUTES.FEEDBACK.path);
    return (
        <main className={cls.container}>
            <div className={cls.iconTitleWrapper}>
                <IconTitlePageBlock
                    icon={<IconQuestion />}
                    title='Can you confirm that the parcel was received?'
                />
            </div>
            <BasisBlock>
                <IconParcelTypeBlock />
                <div className={cls.line} />
                <IconDriverBlock />
            </BasisBlock>
            <DualButtonGroup
                backgroundLeft='red'
                backgroundRight='primary'
                textColorLeft='white'
                textColorRight='white'
                textSize='body2_font_bold'
                textLeft='Delivery failed'
                textRight='Confirm delivery'
                handleClickLeftBtn={handleClick}
                handleClickRightBtn={handleClick}
            />
        </main>
    );
};

export default ConfirmDelivery;
