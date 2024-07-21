import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/utils/const.ts';

export const rideApi = createApi({
    reducerPath: 'rideApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Ride'],
    endpoints: (builder) => ({
        getRides: builder.query({
            query: (): string => `/api/rides`,
            providesTags: ['Ride'],
        }),
    }),
});

export const { useGetRidesQuery } = rideApi;
