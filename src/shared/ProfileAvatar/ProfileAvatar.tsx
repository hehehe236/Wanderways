import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useRef } from 'react';

import cls from './ProfileAvatar.module.css';
import AvatarImg from '/images/AvatarDefault.png';
import { saveProfilePicture, selectProfilePicture } from '@/store/features/profile/profileSlice.ts';
import { IconCamera } from '@/shared/svg/IconCamera.tsx';
import { validateUploadFile } from '@/utils/validateUploadFile.ts';

export const ProfileAvatar = () => {
    const profilePicture = useSelector(selectProfilePicture);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files?.[0];
        const checkFile = validateUploadFile(file);

        if (!checkFile) return;

        const objectURL = URL.createObjectURL(file);
        dispatch(saveProfilePicture(objectURL));
    };

    return (
        <div className={cls.container} data-testid='profileAvatar'>
            <div className={cls.container_avatar}>
                <img src={profilePicture || AvatarImg} alt='avatar' className={cls.img} />
            </div>
            <button type='button' className={cls.container_icon} onClick={handleButtonClick}>
                <IconCamera />
                <input
                    type='file'
                    className={cls.input}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </button>
        </div>
    );
};
