import { cva, type VariantProps } from 'class-variance-authority';
import cls from './Button.module.css';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(cls.button, {
    variants: {
        size: {
            small: cls.small,
            medium: cls.medium,
            large: cls.large,
        },
        variant: {
            icon: cls.icon,
            tag: cls.tag,
        },
        tag: {
            blue: cls.tag_blue,
            red: cls.tag_red,
            green: cls.tag_green,
            yellow: cls.tag_yellow,
            white: cls.tag_white,
        },
    },
});
