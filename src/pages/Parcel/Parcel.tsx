import { Link, useLocation, useParams } from 'react-router-dom';
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
import { ParcelDetailsDescription } from '@/components/ParcelDetailsDescription/ParcelDetailsDescription.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconFindDriver } from '@/shared/svg/IconFindDriver.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { ParcelStatus } from '@/utils/ParcelStatus.ts';
import { ParcelRequests } from '@/components/ParcelRequests/ParcelRequests.tsx';

const Parcel = () => {
    const parcelStatusNew: ParcelStatus = 'New';
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
                {parcel.status === parcelStatusNew && (
                    <li>
                        <Link
                            to='/available-drivers'
                            className={cls.btn_find}
                            state={parcelId}
                            data-testid='btnFindDriver'
                        >
                            <Button
                                type='button'
                                variant='submit'
                                background='primary'
                                size='submit'
                            >
                                <div className={cls.text_btn}>
                                    <IconFindDriver />
                                    <Text size='body2_font_bold' color='white'>
                                        Find driver
                                    </Text>
                                </div>
                            </Button>
                        </Link>
                    </li>
                )}
                {parcel.status === parcelStatusNew && parcel.hasRequests && (
                    <li data-testid='parcelRequests'>
                        <ParcelRequests />
                    </li>
                )}
                <li data-testid='parcelDetailsDescription'>
                    <BasisBlock>
                        <ParcelDetailsDescription />
                    </BasisBlock>
                </li>
                <li id='parcel-route-details'>
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
                <li id='recipient'>
                    <BasisBlock>
                        <Recipient />
                    </BasisBlock>
                </li>
            </ul>
        </main>
    );
};
export default Parcel;
