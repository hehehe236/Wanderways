import { ReactNode } from 'react';
import cls from './BasisBlock.module.css';

export type BasisBlockProps = {
    children: ReactNode;
}

export const BasisBlock = ({children}: BasisBlockProps) => {
    return (
        <div className={cls.container} >
            {children}
        </div>
    )
}