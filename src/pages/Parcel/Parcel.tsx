import { useParams } from 'react-router-dom';

import cls from '@/pages/Parcel/Parcel.module.css';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import { RouteDetails } from '@/components/RouteDetails/RouteDetails.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { Carrier } from '@/components/Carrier/Carrier.tsx';
import { RecipientSenderInfo } from '@/components/RecipientSenderInfo/RecipientSenderInfo.tsx';
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { ParcelDetailsInfo } from '@/components/ParcelDetailsInfo/ParcelDetailsInfo.tsx';
import { useGetParcelByIdQuery } from '@/store/services/parcelService.ts';

const Parcel = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetParcelByIdQuery(id, {skip: !id});

    if (isLoading) return <Loader/>;

    return (
        <main className={cls.container}>
            <ArrowBack/>
            <ParcelDetailsInfo
                type={data.type}
                status={data.status}
                price={data.cost}
            />
            <ul className={cls.container_list}>
                <li>
                    <BasisBlock>
                        <RouteDetails
                            shipStreet={data.shippingAddress.street}
                            shipCity={data.shippingAddress.city}
                            delivStreet={data.deliveryAddress.street}
                            delivCity={data.deliveryAddress.city}
                            shippingDate={data.shippingDate}
                            deliveryDate={data.deliveryDate}
                        />
                    </BasisBlock>
                </li>
                {data.driver && (
                    <li>
                        <BasisBlock>
                            <Carrier name={`${data.driver.name} ${data.driver.lastName}`} phoneNumber={data.driver.phoneNumber}/>
                        </BasisBlock>
                    </li>
                )}
                <li>
                    <BasisBlock>
                        <RecipientSenderInfo
                            nameRecipient={`${data.recipient.name} ${data.recipient.lastName}`}
                            phoneRecipient={data.recipient.phoneNumber}
                            nameSender={data.sender ? `${data.sender.name} ${data.sender.lastName}` : ''}
                            phoneSender={data.sender ? data.sender.phoneNumber : ''}
                            variant={'parcel'}
                        />
                    </BasisBlock>
                </li>
            </ul>
        </main>
    );
};
export default Parcel;