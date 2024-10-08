import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Parcel as ParcelType, ParcelRequestDriver } from '@/store/features/parcel/types.ts';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { DriverRequest } from '@/shared/DriverRequest/DriverRequest.tsx';
import cls from './ParcelRequestsDriver.module.css';

export const ParcelRequestsDriver = () => {
    const { id } = useParams();
    const parcel: ParcelType | undefined = useSelector((state: { parcel: ParcelType[] }) =>
        selectParcelById(state, Number(id))
    );

    if (!parcel) return null;

    return (
        <ul className={cls.list}>
            {parcel.driverRequested?.map((driver: ParcelRequestDriver, i) => (
                <li key={`${driver.lastName}-${i}`} className={cls.item}>
                    <BasisBlock>
                        <DriverRequest
                            name={driver.name}
                            lastName={driver.lastName}
                            departureAddress={driver.departureAddress}
                            arrivalAddress={driver.arrivalAddress}
                        />
                    </BasisBlock>
                </li>
            ))}
        </ul>
    );
};
