import { Ride as RideType } from '@/store/features/ride/types.ts';
import { RideSwitcher } from '@/store/features/switchersSlice.ts';

export const getDeliveryRequests = (
    ride: RideType,
    isVisibleSendersList: RideSwitcher,
    isRequested: boolean
) => {
    const { fromSenders, myRequests } = ride?.senderRequested || {};

    if (isVisibleSendersList === 'From Senders') {
        return isRequested ? fromSenders : fromSenders?.slice(0, 1);
    } else {
        return isRequested ? myRequests : myRequests?.slice(0, 1);
    }
};
