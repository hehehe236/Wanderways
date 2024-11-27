import cls from '@/shared/InputCheckBox/InputCheckBox.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { UseFormRegister } from 'react-hook-form';
import { UserProfileFormType } from '@/shared/UserProfileForm/UserProfileForm.tsx';

export type InputCheckBoxType = {
    register: UseFormRegister<UserProfileFormType>;
    text?: string;
};

export const InputCheckBox = (props: InputCheckBoxType) => {
    const { register, text } = props;

    if (!text) return null;

    return (
        <div className={cls.container}>
            <label htmlFor='wantToBeDriver' className={cls.label}>
                <Text size='headline3_bold' color='primary'>
                    {text}
                </Text>
            </label>
            <input
                data-testid='wantToBeDriver'
                className={cls.checkbox}
                id='wantToBeDriver'
                type='checkbox'
                {...register('wantToBeDriver')}
            />
        </div>
    );
};
