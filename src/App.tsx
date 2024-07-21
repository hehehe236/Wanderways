import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Home = lazy(async () => await import('./pages/Home/Home'));
const Parcel = lazy(async () => await import('./pages/Parcel/Parcel'));

export const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={`parcel/:id`} element={<Parcel />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
