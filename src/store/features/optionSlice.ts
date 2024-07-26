import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateOption = {
    isVisibleParcelList: boolean,
}

const initialState: InitialStateOption = {
    isVisibleParcelList: true,
};

const optionSlice = createSlice({
    name: 'option',
    initialState,
    selectors: {
        selectVisibleParcelList: (state) => state.isVisibleParcelList,
    },
    reducers: {
        setVisibleParcelList: (state, action: PayloadAction<boolean>) => {
            state.isVisibleParcelList = action.payload;
        },
    },
});

export const optionReducer = optionSlice.reducer;
export const { setVisibleParcelList } = optionSlice.actions;
export const { selectVisibleParcelList } = optionSlice.selectors;