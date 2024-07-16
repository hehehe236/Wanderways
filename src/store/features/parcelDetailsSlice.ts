import { createSlice } from '@reduxjs/toolkit';
import { ParcelDetails } from '@/types/contracts.ts';
import { RootState } from '@/store/store.tsx';

const initialState: ParcelDetails = {
    name: '',
    status: '',
    deliveryCost: 0,
};

export const parcelDetailsSlice = createSlice({
    name: 'parcelDetails',
    initialState,
    reducers: {
        saveParcelDetails(state, { payload }) {
            state.name = payload.name;
            state.status = payload.status;
            state.deliveryCost = payload.deliveryCost;
        },
    },
});

export const parseDetailsReducer = parcelDetailsSlice.reducer;

export const { saveParcelDetails } = parcelDetailsSlice.actions;

export const selectParcelDetails = (state: RootState) => state.parcelDetails;
