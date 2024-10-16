import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateOption = {
    isVisibleParcelList: boolean;
    isVisibleSendersList: boolean;
};

const initialState: InitialStateOption = {
    isVisibleParcelList: true,
    isVisibleSendersList: true,
};

const optionSlice = createSlice({
    name: 'option',
    initialState,
    selectors: {
        selectVisibleParcelList: (state) => state.isVisibleParcelList,
        selectVisibleSendersList: (state) => state.isVisibleSendersList,
    },
    reducers: {
        setVisibleParcelList: (state, action: PayloadAction<boolean>) => {
            state.isVisibleParcelList = action.payload;
        },
        setVisibleSendersList: (state, action: PayloadAction<boolean>) => {
            state.isVisibleSendersList = action.payload;
        },
    },
});

export const optionReducer = optionSlice.reducer;
export const { setVisibleParcelList, setVisibleSendersList } = optionSlice.actions;
export const { selectVisibleParcelList, selectVisibleSendersList } = optionSlice.selectors;
