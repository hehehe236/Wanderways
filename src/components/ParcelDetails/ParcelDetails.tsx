import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Text } from '@/shared/Text/Text.tsx';
import { ParcelFilled } from '@/shared/svg/ParcelFilled';
import { Hgryvnia } from '@/shared/svg/Hgryvnia.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { AppDispatch } from '@/store/store.tsx';

import cls from './ParcelDetails.module.css';

import { useGetParcelDetailsQuery } from '@/store/services/parcelService';
import { saveParcelDetails, selectParcelDetails } from '@/store/features/parcelDetailsSlice.ts';

export const ParcelDetails = () => {
    const { data, isLoading: isLoadingParcelDetails } = useGetParcelDetailsQuery({});
    const dispatch: AppDispatch = useDispatch();
    const parcelInfo = useSelector(selectParcelDetails);

    useEffect(() => {
        if (data) {
            dispatch(saveParcelDetails(data));
        }
    }, [data, dispatch]);

    if (isLoadingParcelDetails) return <div>Loading...</div>;

    return (
        <section className={cls.container}>
            <div className={cls.container_icon}>
                <ParcelFilled addStyle={cls.icon} />
            </div>
            <div className={cls.container_text}>
                <Text text={parcelInfo?.name} addStyle={cls.title} />
                <div className={cls.status}>
                    <Button type={'button'} text={parcelInfo?.status} addStyle={cls.button} />
                    <div className={cls.dot}></div>
                    <div className={cls.price}>
                        <Hgryvnia addStyle={cls.icon_hryvnia} />
                        <span className={cls.count}>{parcelInfo?.deliveryCost}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
