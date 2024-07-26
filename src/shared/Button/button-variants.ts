import { cva, type VariantProps } from 'class-variance-authority';
import cls from './Button.module.css';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(cls.button, {
    variants: {
        size: {
            tab: cls.tab_size,
        },
        variant: {
            icon: cls.icon,
            tab: cls.tab,
            submit: cls.submit,
        },
        background: {
            secondary: cls.background_secondary,
            white: cls.background_white,
            primary: cls.background_primary,
        },
    },
});
