import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { parcelDetailsSlice } from './features/parcelDetailsSlice.ts';
import { parcelApi } from '../store/services/parcelService.ts';
import { rideApi } from '@/store/services/rideService.ts';

export const store = configureStore({
    reducer: {
        parcelDetails: parcelDetailsSlice.reducer,
        [parcelApi.reducerPath]: parcelApi.reducer,
        [rideApi.reducerPath]: rideApi.reducer,
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
