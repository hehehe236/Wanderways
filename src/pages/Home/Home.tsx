import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import cls from './Home.module.css';
import { ParcelHandler } from '@/components/ParcelHandler/ParcelHandler.tsx';
import { ParcelList } from '@/components/ParcelList/ParcelList.tsx';
import { RideList } from '@/components/RideList/RideList.tsx';
import {
    HomeSwitcher,
    selectHomeSwitcherValue,
    setHomeSwitcherValue,
} from '@/store/features/switchersSlice.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { Switcher } from '@/shared/Switcher/Switcher.tsx';

const Home = () => {
    const { t } = useTranslation();
    const homeSwitcher = useSelector(selectHomeSwitcherValue);
    const dispatch = useAppDispatch();
    const handleClick = (homeSwitcherValue: HomeSwitcher) =>
        dispatch(setHomeSwitcherValue(homeSwitcherValue));

    return (
        <main className={cls.container}>
            <ParcelHandler />
            <Switcher
                leftTitle={t('home.switcher.leftTitle')}
                rightTitle={t('home.switcher.rightTitle')}
                handleClick={handleClick}
                switcherType={homeSwitcher}
            />
            {homeSwitcher === 'Parcels' ? <ParcelList /> : <RideList />}
        </main>
    );
};

export default Home;
