import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Text } from '@/shared/Text/Text.tsx';
import cls from './ParcelRequests.module.css';
import { Parcel as ParcelType } from '@/store/features/parcel/types.ts';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import { ParcelRequestsDriver } from '@/components/ParcelRequestsDriver/ParcelRequestsDriver.tsx';
import { ROUTES } from '@/utils/routes.ts';

export const ParcelRequests = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const parcel: ParcelType | undefined = useSelector((state: { parcel: ParcelType[] }) =>
        selectParcelById(state, Number(id))
    );

    if (!parcel) return null;

    return (
        <>
            <div className={cls.container}>
                <div className={cls.container_text}>
                    <Text size='headline1_bold' data-testid='titleRequest'>
                        {t('parcel.requests')}
                    </Text>
                    <div className={cls.container_number}>
                        <Text size='body3_font_bold' color='white' data-testid='countRequest'>
                            {parcel?.driverRequested?.length}
                        </Text>
                    </div>
                </div>
                <div>
                    <Link to={ROUTES.HOME.path} data-testid='btnViewAll'>
                        <Text size='body2_font_bold' color='blue'>
                            {t('parcel.viewAll')}
                        </Text>
                    </Link>
                </div>
            </div>
            <ParcelRequestsDriver />
        </>
    );
};
