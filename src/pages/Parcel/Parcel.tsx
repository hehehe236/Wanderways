import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cls from '@/pages/Parcel/Parcel.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { ParcelRouteDetails } from '@/components/ParcelRouteDetails/ParcelRouteDetails.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Carrier } from '@/components/Carrier/Carrier.tsx';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { ParcelDetailsInfo } from '@/components/ParcelDetailsInfo/ParcelDetailsInfo.tsx';
import { useGetParcelByIdQuery } from '@/store/services/parcelService.ts';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import { Parcel as ParcelType } from '@/store/features/parcel/types.ts';
import { Recipient } from '@/components/Recipient/Recipient.tsx';

const Parcel = () => {
    const { id } = useParams();
    const { state: parcelId } = useLocation();
    const { isLoading } = useGetParcelByIdQuery(id, { skip: !id });

    const parcel: ParcelType | undefined = useSelector((state: { parcel: ParcelType[] }) =>
        selectParcelById(state, parcelId)
    );

    if (!parcel) return null;

    if (isLoading) return <Loader />;

    return (
        <main className={cls.container}>
            <ArrowBack />
            <ParcelDetailsInfo />
            <ul className={cls.container_list}>
                <li>
                    <BasisBlock>
                        <ParcelRouteDetails />
                    </BasisBlock>
                </li>
                {parcel.driver && (
                    <li>
                        <BasisBlock>
                            <Carrier />
                        </BasisBlock>
                    </li>
                )}
                <li>
                    <BasisBlock>
                        <Recipient />
                    </BasisBlock>
                </li>
            </ul>
        </main>
    );
};
export default Parcel;
