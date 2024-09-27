import { ParcelStatus } from '@/utils/ParcelStatus.ts';
import { Parcel } from '@/store/features/parcel/types.ts';
import { Ride } from '@/store/features/ride/types.ts';

export const changeStyleForStatusNew = (
    parcel: Parcel | Ride,
    original_style: string,
    change_style: string
) => {
    const status: ParcelStatus = 'New';
    if (parcel.status === status) return `${original_style} ${change_style}`;
    return original_style;
};
