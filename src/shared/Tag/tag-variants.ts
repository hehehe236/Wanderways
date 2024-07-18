import {cva, type VariantProps } from 'class-variance-authority';
import cls from './Tag.module.css';

export type TagVariants = VariantProps<typeof tagVariants>;

export const tagVariants = cva(cls.tag, {
    variants: {
        background: {
            "In Transit": cls.background_blue,
            "Failed": cls.background_red,
            "Delivered": cls.background_green,
            "New": cls.background_yellow,
        },
    },
});