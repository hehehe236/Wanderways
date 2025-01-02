import { t } from 'i18next';

export const getTypeParcel = (typeCount: number): string => {
    switch (typeCount) {
        case 0:
            return t('ride.noParcels');
        case 1:
            return t('ride.oneParcel');
        default:
            return `${typeCount} ${t('ride.moreParcels')}`;
    }
};
