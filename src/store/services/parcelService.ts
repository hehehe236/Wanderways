import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/utils/const.ts';

export const parcelApi = createApi({
    reducerPath: 'parcelApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Parcel'],
    endpoints: (builder) => ({
        getParcels: builder.query({
            query: (): string => `/api/parcels`,
            providesTags: ['Parcel'],
        }),
        getRides: builder.query({
            query: (): string => `/api/rides`,
            providesTags: ['Parcel'],
        }),
    }),
});

export const { useGetParcelsQuery, useGetRidesQuery } = parcelApi;
