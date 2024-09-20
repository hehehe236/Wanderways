import cls from './MyVehicles.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { VehicleList } from '@/components/VehicleList/VehicleList.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Link } from 'react-router-dom';
import { IconAdd } from '@/shared/svg/IconAdd.tsx';
import { useGetVehiclesQuery } from '@/store/services/vehicleService.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Title } from '@/shared/Title/Title.tsx';

const MyVehicles = () => {
    const { isLoading } = useGetVehiclesQuery({});

    if (isLoading) return <Loader />;
    return (
        <main className={cls.container}>
            <Title title='My vehicles' />
            <VehicleList />
            <Link to='/profile/new-vehicle' className={cls.btn}>
                <Button type='button' variant='submit' background='primary' size='submit'>
                    <div className={cls.text_btn}>
                        <IconAdd addStyle={cls.icon_add} />
                        <Text size='body2_font_bold' color='white'>
                            Add new vehicle
                        </Text>
                    </div>
                </Button>
            </Link>
        </main>
    );
};

export default MyVehicles;
