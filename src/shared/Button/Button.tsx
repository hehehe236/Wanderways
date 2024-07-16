import { ComponentPropsWithRef } from 'react';
import { type ButtonVariants, buttonVariants } from './button-variants.ts';

type ButtonProps = ComponentPropsWithRef<'button'> & ButtonVariants;

const Button = ({ children, type, size, variant, tag, className, ...props }: ButtonProps) => {
    return (
        <button
            type={type}
            {...props}
            className={buttonVariants({ size, variant, tag, className })}
        >
            {children}
        </button>
    );
};

export { Button };
