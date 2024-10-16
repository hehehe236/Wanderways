import { Ride as RideType } from '@/store/features/ride/types.ts';

export const getDeliveryRequests = (
    ride: RideType,
    isVisibleOthersList: boolean,
    isRequested: boolean
) => {
    const { fromSenders, myRequests } = ride?.senderRequested || {};

    if (isVisibleOthersList) {
        return isRequested ? fromSenders : fromSenders?.slice(0, 1);
    } else {
        return isRequested ? myRequests : myRequests?.slice(0, 1);
    }
};
