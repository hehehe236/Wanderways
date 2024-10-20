import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HomeSwitcher = 'Parcels' | 'Rides';
export type RideSwitcher = 'From Senders' | 'My Requests';

export type InitialStateOption = {
    homeSwitcher: HomeSwitcher;
    rideSwitcher: RideSwitcher;
};

const initialState: InitialStateOption = {
    homeSwitcher: 'Parcels',
    rideSwitcher: 'From Senders',
};

const switchersSlice = createSlice({
    name: 'switchers',
    initialState,
    selectors: {
        selectValueHomeSwitcher: (state) => state.homeSwitcher,
        selectValueRideSwitcher: (state) => state.rideSwitcher,
    },
    reducers: {
        setValueHomeSwitcher: (state, action: PayloadAction<HomeSwitcher>) => {
            state.homeSwitcher = action.payload;
        },
        setValueRideSwitcher: (state, action: PayloadAction<RideSwitcher>) => {
            state.rideSwitcher = action.payload;
        },
    },
});

export const switchersReducer = switchersSlice.reducer;
export const { setValueHomeSwitcher, setValueRideSwitcher } = switchersSlice.actions;
export const { selectValueHomeSwitcher, selectValueRideSwitcher } = switchersSlice.selectors;
