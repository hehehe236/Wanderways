import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';

const Home = lazy(async () => await import('./pages/Home/Home'));
const Parcel = lazy(async () => await import('./pages/Parcel/Parcel'));
const Ride = lazy(async () => await import('./pages/Ride/Ride'));
const ParcelCreate = lazy(async () => await import('./pages/ParcelCreate/ParcelCreate'));
const RideCreate = lazy(async () => await import('./pages/RideCreate/RideCreate'));
const AvailableParcels = lazy(
    async () => await import('./pages/AvailableParcels/AvailableParcels')
);
const Profile = lazy(async () => await import('./pages/Profile/Profile'));

export const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='parcel/:id' element={<Parcel />} />
                    <Route path='ride/:id' element={<Ride />} />
                    <Route path='parcel' element={<ParcelCreate />} />
                    <Route path='ride' element={<RideCreate />} />
                    <Route path='ride/vehicle' element={<ArrowBack />} />
                    <Route path='available-parcels' element={<AvailableParcels />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
