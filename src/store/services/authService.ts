import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/utils/const.ts';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/login',
                method: 'POST',
                body: { email, password },
            }),
        }),
        register: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/register',
                method: 'POST',
                body: { email, password },
            }),
        }),
        logout: builder.query({
            query: () => '/auth/logout',
            keepUnusedDataFor: 0,
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutQuery } = authApi;
