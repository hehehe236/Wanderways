import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LayoutWithoutHeader from '@/components/LayoutWithoutAvatar/LayoutWithoutHeader.tsx';
import LayoutWithoutAvatar from '@/components/LayoutWithoutHeader/LayoutWithoutAvatar.tsx';

const Home = lazy(async () => await import('./pages/Home/Home'));
const Parcel = lazy(async () => await import('./pages/Parcel/Parcel'));
const Ride = lazy(async () => await import('./pages/Ride/Ride'));
const ParcelCreate = lazy(async () => await import('./pages/ParcelCreate/ParcelCreate'));
const RideCreate = lazy(async () => await import('./pages/RideCreate/RideCreate'));
const AvailableParcels = lazy(
    async () => await import('./pages/AvailableParcels/AvailableParcels')
);
const AvailableDrivers = lazy(
    async () => await import('./pages/AvailableDrivers/AvailableDrivers')
);
const Profile = lazy(async () => await import('./pages/Profile/Profile'));
const ProfileGeneral = lazy(async () => await import('./pages/ProfileGeneral/ProfileGeneral'));
const ProfileEmail = lazy(async () => await import('@/pages/ProfileEmail/ProfileEmail.tsx'));
const ProfilePassword = lazy(
    async () => await import('@/pages/ProfilePassword/ProfilePassword.tsx')
);
const MyVehicles = lazy(async () => await import('./pages/MyVehicles/MyVehicles'));
const ProfileVehicle = lazy(async () => await import('./pages/ProfileVehicle/ProfileVehicle'));
const RideParcelRequests = lazy(
    async () => await import('./pages/RideParcelRequests/RideParcelRequests')
);
const SignIn = lazy(async () => await import('./pages/SignIn/SignIn'));
const SignUp = lazy(async () => await import('./pages/SignUp/SignUp'));
const AboutYourself = lazy(async () => await import('./pages/AboutYourself/AboutYourself'));
const SignOut = lazy(async () => await import('./pages/SignOut/SignOut'));
const ConfirmEmail = lazy(async () => await import('./pages/ConfirmEmail/ConfirmEmail'));
const VerifiedEmail = lazy(async () => await import('./pages/VerifiedEmail/VerifiedEmail'));
const ConfirmDelivery = lazy(async () => await import('./pages/ConfirmDelivery/ConfirmDelivery'));
const SendFeedback = lazy(async () => await import('./pages/SendFeedback/SendFeedback'));
const FeedbackConfirmation = lazy(
    async () => await import('./pages/FeedbackConfirmation/FeedbackConfirmation')
);
const RestorePassword = lazy(async () => await import('./pages/RestorePassword/RestorePassword'));
const NewPassword = lazy(async () => await import('./pages/NewPassword/NewPassword'));

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
                    <Route path='available-parcels' element={<AvailableParcels />} />
                    <Route path='available-drivers' element={<AvailableDrivers />} />
                    <Route path='ride/:id/requested' element={<RideParcelRequests />} />
                </Route>
                <Route path='profile' element={<LayoutWithoutAvatar />}>
                    <Route index element={<Profile />} />
                    <Route path='general' element={<ProfileGeneral />} />
                    <Route path='email' element={<ProfileEmail />} />
                    <Route path='vehicles' element={<MyVehicles />} />
                    <Route path='new-vehicle' element={<ProfileVehicle />} />
                    <Route path='password' element={<ProfilePassword />} />
                    <Route path='signout' element={<SignOut />} />
                </Route>
                <Route path='/signin' element={<LayoutWithoutAvatar />}>
                    <Route index element={<SignIn />} />
                    <Route path='restore-password' element={<RestorePassword />} />
                    <Route path='new-password' element={<NewPassword />} />
                </Route>
                <Route path='/signup' element={<LayoutWithoutAvatar />}>
                    <Route index element={<SignUp />} />
                    <Route path='about-yourself' element={<AboutYourself />} />
                    <Route path='confirm-email' element={<ConfirmEmail />} />
                </Route>
                <Route path='/signup/verified-email' element={<LayoutWithoutHeader />}>
                    <Route index element={<VerifiedEmail />} />
                </Route>
                <Route path='/confirm-delivery' element={<LayoutWithoutHeader />}>
                    <Route index element={<ConfirmDelivery />} />
                    <Route path='feedback' element={<SendFeedback />} />
                    <Route path='feedback-confirmation' element={<FeedbackConfirmation />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
