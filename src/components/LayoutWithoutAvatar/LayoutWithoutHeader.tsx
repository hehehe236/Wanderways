import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '@/shared/Loader/Loader.tsx';

const LayoutWithoutHeader = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
};

export default LayoutWithoutHeader;
