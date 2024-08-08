import { useSelector } from 'react-redux';

import cls from './Home.module.css';
import { ParcelHandler } from '@/components/ParcelHandler/ParcelHandler.tsx';
import { Tabs } from '@/components/Tabs/Tabs.tsx';
import { ParcelList } from '@/components/ParcelList/ParcelList.tsx';
import { RideList } from '@/components/RideList/RideList.tsx';
import { selectVisibleParcelList } from '@/store/features/optionSlice.ts';

const Home = () => {
    const isVisibleParcelList = useSelector(selectVisibleParcelList);

    return (
        <main className={cls.container}>
            <ParcelHandler />
            <Tabs />
            {isVisibleParcelList ? <ParcelList /> : <RideList />}
        </main>
    );
};

export default Home;
