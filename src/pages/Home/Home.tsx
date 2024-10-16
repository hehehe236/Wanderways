import { useSelector } from 'react-redux';

import cls from './Home.module.css';
import { ParcelHandler } from '@/components/ParcelHandler/ParcelHandler.tsx';
import { ParcelList } from '@/components/ParcelList/ParcelList.tsx';
import { RideList } from '@/components/RideList/RideList.tsx';
import { selectVisibleParcelList, setVisibleParcelList } from '@/store/features/optionSlice.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { Switcher } from '@/shared/Switcher/Switcher.tsx';

const Home = () => {
    const isVisibleParcelList = useSelector(selectVisibleParcelList);
    const dispatch = useAppDispatch();
    const handleClick = (isParcelTab: boolean) => dispatch(setVisibleParcelList(isParcelTab));

    return (
        <main className={cls.container}>
            <ParcelHandler />
            <Switcher
                leftTitle='Parcels'
                rightTitle='Rides'
                handleClick={handleClick}
                isActiveTab={isVisibleParcelList}
            />
            {isVisibleParcelList ? <ParcelList /> : <RideList />}
        </main>
    );
};

export default Home;
