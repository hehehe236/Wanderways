import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';

const Layout = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Header />
                <Outlet />
            </Suspense>
        </>
    );
};

export default Layout;
