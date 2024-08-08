import cls from './ParcelCreate.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ParcelCreateForm } from '@/components/ParcelCreateForm/ParcelCreateForm.tsx';

const ParcelCreate = () => {
    return (
        <div className={cls.container}>
            <ArrowBack />
            <Text size={'headline1_bold'} color={'primary'} className={cls.title}>
                Send parcel
            </Text>
            <ParcelCreateForm />
        </div>
    );
};

export default ParcelCreate;
