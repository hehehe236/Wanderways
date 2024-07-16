import { type TextVariants, textVariants } from './text-variants.ts';
import { ComponentPropsWithRef } from 'react';

type TextProps = ComponentPropsWithRef<'p'> & TextVariants;

const Text = ({ children, size, color, className, ...props }: TextProps) => {
    return (
        <p {...props} className={textVariants({ size, color, className })}>
            {children}
        </p>
    );
};

export { Text };