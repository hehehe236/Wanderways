import cls from './Home.module.scss';
import { ParcelHandler } from '@/components/ParcelHandler/ParcelHandler.tsx';

const Home = () => {
    return (
        <main className={cls.container}>
            <ParcelHandler />
        </main>
    );
};

export default Home;
