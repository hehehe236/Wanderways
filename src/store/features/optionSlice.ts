import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateOption = {
    isVisibleParcelList: boolean;
    isVisibleOthersList: boolean;
};

const initialState: InitialStateOption = {
    isVisibleParcelList: true,
    isVisibleOthersList: true,
};

const optionSlice = createSlice({
    name: 'option',
    initialState,
    selectors: {
        selectVisibleParcelList: (state) => state.isVisibleParcelList,
        selectVisibleOthersList: (state) => state.isVisibleOthersList,
    },
    reducers: {
        setVisibleParcelList: (state, action: PayloadAction<boolean>) => {
            state.isVisibleParcelList = action.payload;
        },
        setVisibleOtherList: (state, action: PayloadAction<boolean>) => {
            state.isVisibleOthersList = action.payload;
        },
    },
});

export const optionReducer = optionSlice.reducer;
export const { setVisibleParcelList, setVisibleOtherList } = optionSlice.actions;
export const { selectVisibleParcelList, selectVisibleOthersList } = optionSlice.selectors;
