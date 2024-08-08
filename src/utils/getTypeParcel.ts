export const getTypeParcel = (typeCount: number): string => {
    switch (typeCount) {
        case 0:
            return 'No parcels';
        case 1:
            return '1 parcel';
        default:
            return `${typeCount} parcels`;
    }
};
