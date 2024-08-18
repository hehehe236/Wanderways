import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Profile = {
    userId: number;
    name: string;
    lastName: string;
    phone?: string;
    email?: string;
    profilePicture: string;
};

const initialState: Profile = {
    userId: 0,
    name: '',
    lastName: '',
    phone: '',
    email: '',
    profilePicture: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    selectors: {
        selectProfilePicture: (state) => state.profilePicture,
        selectProfileName: (state) => state.name,
        selectProfileLastName: (state) => state.lastName,
    },
    reducers: {
        saveProfilePicture: (state, action: PayloadAction<string>) => {
            state.profilePicture = action.payload;
        },
    },
});

export const profileReducer = profileSlice.reducer;
export const { saveProfilePicture } = profileSlice.actions;
export const { selectProfilePicture, selectProfileName, selectProfileLastName } =
    profileSlice.selectors;
