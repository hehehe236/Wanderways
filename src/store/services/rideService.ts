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
        getRideById: builder.query({
            query: (rideId): string => `/api/rides/${rideId}`,
            providesTags: ['Ride'],
        }),
        getRideAcceptedParcels: builder.query({
            query: (rideId): string => `/api/rides/${rideId}/accepted`,
            providesTags: ['Ride'],
        }),
    }),
});

export const {
    useGetRidesQuery,
    useGetRideByIdQuery,
    useGetRideAcceptedParcelsQuery
} = rideApi;
