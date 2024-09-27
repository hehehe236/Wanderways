import { ComponentPropsWithRef } from 'react';
import { type TagVariants, tagVariants } from '@/shared/Tag/tag-variants.ts';
import { Text } from '@/shared/Text/Text.tsx';
import { ParcelStatus } from '@/utils/ParcelStatus.ts';

export type TextVariant = ParcelStatus;
export type TagProps = ComponentPropsWithRef<'div'> & TagVariants & { text?: TextVariant };

const Tag = ({ text, background, text_color, className, ...props }: TagProps) => {
    return (
        <div {...props} className={tagVariants({ background, text_color, className })}>
            <Text size='body4_font_700'>{text}</Text>
        </div>
    );
};

export { Tag };
