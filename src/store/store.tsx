import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { parcelApi } from '../store/services/parcelService.ts';
import { rideApi } from '@/store/services/rideService.ts';
import { optionReducer } from './features/optionSlice.ts';
import { parcelReducer } from '@/store/features/parcel/parcelSlice.ts';
import { rideReducer } from '@/store/features/ride/rideSlice.ts';
import { profileReducer } from '@/store/features/profile/profileSlice.ts';

export const store = configureStore({
    reducer: {
        [parcelApi.reducerPath]: parcelApi.reducer,
        [rideApi.reducerPath]: rideApi.reducer,
        option: optionReducer,
        parcel: parcelReducer,
        ride: rideReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(parcelApi.middleware)
            .concat(rideApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
