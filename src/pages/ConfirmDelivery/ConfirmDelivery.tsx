import { IconTitlePageBlock } from '@/shared/IconTitlePageBlock/IconTitlePageBlock.tsx';
import { IconQuestion } from '@/shared/svg/IconQuestion.tsx';
import cls from './ConfirmDelivery.module.css';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { IconParcelTypeBlock } from '@/shared/IconParcelTypeBlock/IconParcelTypeBlock.tsx';
import { IconDriverBlock } from '@/shared/IconDriverBlock/IconDriverBlock.tsx';
import { Link } from 'react-router-dom';
import { Text } from '@/shared/Text/Text.tsx';
import { ROUTES } from '@/utils/routes.ts';

const ConfirmDelivery = () => {
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
            <div className={cls.block_btn}>
                <Link to={ROUTES.FEEDBACK.path} className={cls.btn_cancel} data-testid='btnCancel'>
                    <Text size='body2_font_bold'>Delivery failed</Text>
                </Link>
                <Link to={ROUTES.FEEDBACK.path} className={cls.btn_yes} data-testid='btnYes'>
                    <Text size='body2_font_bold'>Confirm delivery</Text>
                </Link>
            </div>
        </main>
    );
};

export default ConfirmDelivery;
