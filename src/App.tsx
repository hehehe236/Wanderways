import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LayoutWithoutHeader from '@/components/LayoutWithoutAvatar/LayoutWithoutHeader.tsx';
import LayoutWithoutAvatar from '@/components/LayoutWithoutHeader/LayoutWithoutAvatar.tsx';

import { Loader } from '@/shared/Loader/Loader.tsx';
import { routes, RouteType } from '@/utils/routes.ts';

const layouts = {
    Layout,
    LayoutWithoutHeader,
    LayoutWithoutAvatar,
};

export const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Suspense fallback={<Loader />}>
                <Routes>
                    {routes.map(
                        ({ path, element: PageComponent, layout: LayoutName }: RouteType) => {
                            const LayoutComponent = layouts[LayoutName as keyof typeof layouts];
                            return (
                                <Route key={path} path={path} element={<LayoutComponent />}>
                                    <Route index element={<PageComponent />} />
                                </Route>
                            );
                        }
                    )}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
