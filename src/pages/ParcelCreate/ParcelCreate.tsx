import cls from './ParcelCreate.module.css';
import { ParcelCreateForm } from '@/components/ParcelCreateForm/ParcelCreateForm.tsx';
import { Title } from '@/shared/Title/Title.tsx';

const ParcelCreate = () => {
    return (
        <div className={cls.container}>
            <Title title='Send parcel' />
            <ParcelCreateForm />
        </div>
    );
};

export default ParcelCreate;
