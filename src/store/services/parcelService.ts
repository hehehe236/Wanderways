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
        getParcelById: builder.query({
            query: (parcelId): string => `/api/parcels/${parcelId}`,
            providesTags: ['Parcel'],
        }),
    }),
});

export const { useGetParcelsQuery, useGetParcelByIdQuery } = parcelApi;
