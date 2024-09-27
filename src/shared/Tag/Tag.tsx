import { ComponentPropsWithRef } from 'react';
import { type TagVariants, tagVariants } from '@/shared/Tag/tag-variants.ts';
import { Text } from '@/shared/Text/Text.tsx';
import { Status } from '@/utils/ParcelStatus.ts';

export type TextVariant = Status;
export type TagProps = ComponentPropsWithRef<'div'> & TagVariants & { text?: TextVariant };

const Tag = ({ text, background, className, ...props }: TagProps) => {
    return (
        <div {...props} className={tagVariants({ background, className })}>
            <Text size='body4_font_bold' color='white'>
                {text}
            </Text>
        </div>
    );
};

export { Tag };
