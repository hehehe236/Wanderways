import { Ride as RideType } from '@/store/features/ride/types.ts';

export const getDeliveryRequests = (
    ride: RideType,
    isVisibleSendersList: boolean,
    isRequested: boolean
) => {
    const { fromSenders, myRequests } = ride?.senderRequested || {};

    if (isVisibleSendersList) {
        return isRequested ? fromSenders : fromSenders?.slice(0, 1);
    } else {
        return isRequested ? myRequests : myRequests?.slice(0, 1);
    }
};
