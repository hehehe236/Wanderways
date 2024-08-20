import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { parcelApi } from '../store/services/parcelService.ts';
import { rideApi } from '@/store/services/rideService.ts';
import { optionReducer } from './features/optionSlice.ts';
import { parcelReducer } from '@/store/features/parcel/parcelSlice.ts';
import { rideReducer } from '@/store/features/ride/rideSlice.ts';
import { profileReducer } from '@/store/features/profile/profileSlice.ts';
import { profileApi } from '@/store/services/profileService.ts';

const profilePersistConfig = {
    key: 'profile',
    storage,
};

const rootReducer = combineReducers({
    [parcelApi.reducerPath]: parcelApi.reducer,
    [rideApi.reducerPath]: rideApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    option: optionReducer,
    parcel: parcelReducer,
    ride: rideReducer,
    profile: persistReducer(profilePersistConfig, profileReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(parcelApi.middleware)
            .concat(rideApi.middleware)
            .concat(profileApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
