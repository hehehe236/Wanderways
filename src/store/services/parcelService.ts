import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
            keepUnusedDataFor: 0,
        }),
        getParcelById: builder.query({
            query: (parcelId): string => `/api/parcels/${parcelId}`,
            keepUnusedDataFor: 0,
        }),
        createParcel: builder.mutation({
            query: (newParcel): FetchArgs => ({
                url: '/api/parcels',
                method: 'POST',
                body: newParcel,
            }),
        }),
    }),
});

export const { useGetParcelsQuery, useGetParcelByIdQuery, useCreateParcelMutation } = parcelApi;
