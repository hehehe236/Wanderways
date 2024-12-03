type Route =
    | { type: 'HOME'; path: '/' }
    | { type: 'SIGNUP'; path: '/signup' }
    | { type: 'SIGNIN'; path: '/signin' }
    | { type: 'PROFILE'; path: '/profile' }
    | { type: 'AVAILABLE_PARCELS'; path: '/available-parcels' }
    | { type: 'AVAILABLE_DRIVERS'; path: '/available-drivers' }
    | { type: 'CONFIRM_EMAIL'; path: 'confirm-email' }
    | { type: 'FEEDBACK'; path: 'feedback' };

export const ROUTES: Record<Route['type'], Route> = {
    HOME: { type: 'HOME', path: '/' },
    SIGNUP: { type: 'SIGNUP', path: '/signup' },
    SIGNIN: { type: 'SIGNIN', path: '/signin' },
    PROFILE: { type: 'PROFILE', path: '/profile' },
    AVAILABLE_PARCELS: { type: 'AVAILABLE_PARCELS', path: '/available-parcels' },
    AVAILABLE_DRIVERS: { type: 'AVAILABLE_DRIVERS', path: '/available-drivers' },
    CONFIRM_EMAIL: { type: 'CONFIRM_EMAIL', path: 'confirm-email' },
    FEEDBACK: { type: 'FEEDBACK', path: 'feedback' },
};
