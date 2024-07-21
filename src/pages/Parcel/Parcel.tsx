import { useParams } from 'react-router-dom';

import cls from '@/pages/Parcel/Parcel.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { ParcelDetails } from '@/components/ParcelDetails/ParcelDetails.tsx';
import { RouteDetails } from '@/components/RouteDetails/RouteDetails.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';

import { useGetParcelByIdQuery } from '@/store/services/parcelService.ts';
import { Carrier } from '@/components/Carrier/Carrier.tsx';
import { RecipientSenderInfo } from '@/components/RecipientSenderInfo/RecipientSenderInfo.tsx';

const Parcel = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetParcelByIdQuery(id, {skip: !id});

    if (isLoading) return <Loader/>;

    return (
        <main className={cls.container}>
            <ArrowBack/>
            <ParcelDetails
                details={data.details}
                status={data.status}
                price={data.cost}
            />
            <ul className={cls.container_list}>
                <li>
                    <RouteDetails
                        shipStreet={data.shippingAddress.street}
                        shipCity={data.shippingAddress.city}
                        delivStreet={data.deliveryAddress.street}
                        delivCity={data.deliveryAddress.city}
                        shippingDate={data.shippingDate}
                        deliveryDate={data.deliveryDate}
                    />
                </li>
                <li>
                    <Carrier name={`${data.driver.name} ${data.driver.lastName}`} phoneNumber={data.driver.phoneNumber}/>
                </li>
                <li>
                    <RecipientSenderInfo
                        nameRecipient={`${data.recipient.name} ${data.recipient.lastName}`}
                        phoneRecipient={data.recipient.phoneNumber}
                        nameSender={`${data.sender.name} ${data.sender.lastName}`}
                        phoneSender={data.sender.phoneNumber}
                    />
                </li>
            </ul>

        </main>
    );
};
export default Parcel;