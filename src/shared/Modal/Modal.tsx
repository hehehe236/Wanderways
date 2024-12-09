import { ReactNode } from 'react';
import ModalReact from 'react-modal';
import { useNavigate } from 'react-router-dom';

import cls from './Modal.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { IconClose } from '@/shared/svg/IconClose.tsx';

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    redirect?: string;
};

export const Modal = ({ isOpen, onClose, children, redirect }: ModalProps) => {
    const navigate = useNavigate();

    return (
        <ModalReact
            isOpen={isOpen}
            className={cls.content}
            ariaHideApp={false}
            closeTimeoutMS={250}
            onRequestClose={() => onClose()}
            bodyOpenClassName={cls.block_scroll}
        >
            <Button
                variant='icon'
                type='button'
                className={cls.btn}
                onClick={redirect ? () => navigate(redirect) : onClose}
            >
                <IconClose />
            </Button>
            {children}
        </ModalReact>
    );
};
