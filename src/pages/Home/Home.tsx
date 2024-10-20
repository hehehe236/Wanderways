import { useSelector } from 'react-redux';

import cls from './Home.module.css';
import { ParcelHandler } from '@/components/ParcelHandler/ParcelHandler.tsx';
import { ParcelList } from '@/components/ParcelList/ParcelList.tsx';
import { RideList } from '@/components/RideList/RideList.tsx';
import {
    HomeSwitcher,
    selectValueHomeSwitcher,
    setValueHomeSwitcher,
} from '@/store/features/switchersSlice.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { Switcher } from '@/shared/Switcher/Switcher.tsx';

const Home = () => {
    const homeSwitcher = useSelector(selectValueHomeSwitcher);
    const dispatch = useAppDispatch();
    const handleClick = (chooseTab: HomeSwitcher) => dispatch(setValueHomeSwitcher(chooseTab));

    return (
        <main className={cls.container}>
            <ParcelHandler />
            <Switcher
                leftTitle='Parcels'
                rightTitle='Rides'
                handleClick={handleClick}
                isActiveTab={homeSwitcher}
            />
            {homeSwitcher === 'Parcels' ? <ParcelList /> : <RideList />}
        </main>
    );
};

export default Home;
