import { useState } from 'react';

import cls from './Home.module.scss';
import { ParcelHandler } from '@/components/ParcelHandler/ParcelHandler.tsx';
import { Tabs } from '@/components/Tabs/Tabs.tsx';
import { ParcelList } from '@/components/ParcelList/ParcelList.tsx';
import { RideList } from '@/components/RideList/RideList.tsx';

const Home = () => {
    const [isParcel, setIsParcel] = useState(true);
    const getIsParcel = () => setIsParcel(!isParcel);

    return (
        <main className={cls.container}>
            <ParcelHandler />
            <Tabs getIsParcel={getIsParcel}/>
            {isParcel ? <ParcelList/> : <RideList/>}
        </main>
    );
};

export default Home;
