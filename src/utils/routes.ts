import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Home = lazy(async () => await import('@/pages/Home/Home'));
const Parcel = lazy(async () => await import('@/pages/Parcel/Parcel'));
const Ride = lazy(async () => await import('@/pages/Ride/Ride'));
const ParcelCreate = lazy(async () => await import('@/pages/ParcelCreate/ParcelCreate'));
const RideCreate = lazy(async () => await import('@/pages/RideCreate/RideCreate'));
const AvailableParcels = lazy(
    async () => await import('@/pages/AvailableParcels/AvailableParcels')
);
const AvailableDrivers = lazy(
    async () => await import('@/pages/AvailableDrivers/AvailableDrivers')
);
const Profile = lazy(async () => await import('@/pages/Profile/Profile'));
const ProfileGeneral = lazy(async () => await import('@/pages/ProfileGeneral/ProfileGeneral'));
const ProfileEmail = lazy(async () => await import('@/pages/ProfileEmail/ProfileEmail.tsx'));
const ProfilePassword = lazy(
    async () => await import('@/pages/ProfilePassword/ProfilePassword.tsx')
);
const MyVehicles = lazy(async () => await import('@/pages/MyVehicles/MyVehicles'));
const ProfileVehicle = lazy(async () => await import('@/pages/ProfileVehicle/ProfileVehicle'));
const RideParcelRequests = lazy(
    async () => await import('@/pages/RideParcelRequests/RideParcelRequests')
);
const SignIn = lazy(async () => await import('@/pages/SignIn/SignIn'));
const SignUp = lazy(async () => await import('@/pages/SignUp/SignUp'));
const AboutYourself = lazy(async () => await import('@/pages/AboutYourself/AboutYourself'));
const SignOut = lazy(async () => await import('@/pages/SignOut/SignOut'));
const ConfirmEmail = lazy(async () => await import('@/pages/ConfirmEmail/ConfirmEmail'));
const VerifiedEmail = lazy(async () => await import('@/pages/VerifiedEmail/VerifiedEmail'));
const ConfirmDelivery = lazy(async () => await import('@/pages/ConfirmDelivery/ConfirmDelivery'));
const SendFeedback = lazy(async () => await import('@/pages/SendFeedback/SendFeedback'));
const FeedbackConfirmation = lazy(
    async () => await import('@/pages/FeedbackConfirmation/FeedbackConfirmation')
);
const RestorePassword = lazy(async () => await import('@/pages/RestorePassword/RestorePassword'));
const NewPassword = lazy(async () => await import('@/pages/NewPassword/NewPassword'));
const ProfileLanguage = lazy(async () => await import('@/pages/ProfileLanguage/ProfileLanguage'));

type Route =
    | { type: 'HOME'; path: '/' }
    | { type: 'SIGNUP'; path: '/signup' }
    | { type: 'SIGNIN'; path: '/signin' }
    | { type: 'PROFILE'; path: '/profile' }
    | { type: 'AVAILABLE_PARCELS'; path: '/available-parcels' }
    | { type: 'AVAILABLE_DRIVERS'; path: '/available-drivers' }
    | { type: 'CONFIRM_EMAIL'; path: 'confirm-email' }
    | { type: 'FEEDBACK'; path: 'feedback' }
    | { type: 'RESTORE_PASSWORD'; path: '/signin/restore-password' }
    | { type: 'NEW_VEHICLE'; path: '/profile/new-vehicle' };

export const ROUTES: Record<Route['type'], Route> = {
    HOME: { type: 'HOME', path: '/' },
    SIGNUP: { type: 'SIGNUP', path: '/signup' },
    SIGNIN: { type: 'SIGNIN', path: '/signin' },
    PROFILE: { type: 'PROFILE', path: '/profile' },
    AVAILABLE_PARCELS: { type: 'AVAILABLE_PARCELS', path: '/available-parcels' },
    AVAILABLE_DRIVERS: { type: 'AVAILABLE_DRIVERS', path: '/available-drivers' },
    CONFIRM_EMAIL: { type: 'CONFIRM_EMAIL', path: 'confirm-email' },
    FEEDBACK: { type: 'FEEDBACK', path: 'feedback' },
    RESTORE_PASSWORD: { type: 'RESTORE_PASSWORD', path: '/signin/restore-password' },
    NEW_VEHICLE: { type: 'NEW_VEHICLE', path: '/profile/new-vehicle' },
};

export type RouteType = {
    path: string;
    element: LazyExoticComponent<ComponentType>;
    layout: string;
};

export const routes: RouteType[] = [
    { path: '/', element: Home, layout: 'Layout' },
    { path: 'parcel/:id', element: Parcel, layout: 'Layout' },
    { path: 'ride/:id', element: Ride, layout: 'Layout' },
    { path: 'parcel', element: ParcelCreate, layout: 'Layout' },
    { path: 'ride', element: RideCreate, layout: 'Layout' },
    { path: 'available-parcels', element: AvailableParcels, layout: 'Layout' },
    { path: 'available-drivers', element: AvailableDrivers, layout: 'Layout' },
    { path: 'ride/:id/requested', element: RideParcelRequests, layout: 'Layout' },
    { path: 'profile', element: Profile, layout: 'LayoutWithoutAvatar' },
    { path: 'profile/general', element: ProfileGeneral, layout: 'LayoutWithoutAvatar' },
    { path: 'profile/email', element: ProfileEmail, layout: 'LayoutWithoutAvatar' },
    { path: 'profile/vehicles', element: MyVehicles, layout: 'LayoutWithoutAvatar' },
    { path: 'profile/new-vehicle', element: ProfileVehicle, layout: 'LayoutWithoutAvatar' },
    { path: 'profile/password', element: ProfilePassword, layout: 'LayoutWithoutAvatar' },
    { path: 'profile/signout', element: SignOut, layout: 'LayoutWithoutAvatar' },
    { path: 'profile/language', element: ProfileLanguage, layout: 'LayoutWithoutAvatar' },
    { path: 'signin', element: SignIn, layout: 'LayoutWithoutAvatar' },
    { path: 'signin/restore-password', element: RestorePassword, layout: 'LayoutWithoutAvatar' },
    { path: 'signin/new-password', element: NewPassword, layout: 'LayoutWithoutAvatar' },
    { path: 'signup', element: SignUp, layout: 'LayoutWithoutAvatar' },
    { path: 'signup/about-yourself', element: AboutYourself, layout: 'LayoutWithoutAvatar' },
    { path: 'signup/confirm-email', element: ConfirmEmail, layout: 'LayoutWithoutAvatar' },
    { path: 'signup/verified-email', element: VerifiedEmail, layout: 'LayoutWithoutHeader' },
    { path: 'confirm-delivery', element: ConfirmDelivery, layout: 'LayoutWithoutHeader' },
    { path: 'confirm-delivery/feedback', element: SendFeedback, layout: 'LayoutWithoutHeader' },
    {
        path: 'confirm-delivery/feedback-confirmation',
        element: FeedbackConfirmation,
        layout: 'LayoutWithoutHeader',
    },
];
