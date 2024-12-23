import cls from './ParcelCreate.module.css';
import { ParcelCreateForm } from '@/components/ParcelCreateForm/ParcelCreateForm.tsx';
import { Title } from '@/shared/Title/Title.tsx';
import { useTranslation } from 'react-i18next';

const ParcelCreate = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.container}>
            <Title title={t('parcelCreate.title')} />
            <ParcelCreateForm />
        </div>
    );
};

export default ParcelCreate;
