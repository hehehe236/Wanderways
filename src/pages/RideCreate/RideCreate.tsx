import cls from './RideCreate.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { RideCreateForm } from '@/components/RideCreateForm/RideCreateForm.tsx';

const RideCreate = () => {
    return (
        <div className={cls.container}>
            <ArrowBack />
            <Text size='headline1_bold' color='primary' className={cls.title}>
                Deliver parcel
            </Text>
            <RideCreateForm />
        </div>
    );
};

export default RideCreate;
