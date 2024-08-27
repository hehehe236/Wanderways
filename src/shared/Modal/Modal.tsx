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
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const navigate = useNavigate();
    const handleClickIconClose = () => navigate('/parcel/1', { state: 1 });

    return (
        <ModalReact
            isOpen={isOpen}
            className={cls.content}
            ariaHideApp={false}
            closeTimeoutMS={250}
            onRequestClose={() => onClose()}
            bodyOpenClassName={cls.block_scroll}
        >
            <Button variant='icon' type='button' className={cls.btn} onClick={handleClickIconClose}>
                <IconClose />
            </Button>
            {children}
        </ModalReact>
    );
};
