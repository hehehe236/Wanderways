import cls from './AcceptedParcelList.module.css'
import { BasisBlock } from '@/shared/BasisBlock/BasisBlock.tsx';
import { AcceptedParcel } from '@/components/AcceptedParcel/AcceptedParcel.tsx';

export const AcceptedParcelList = (props: any) => {
    const {
        shipStreet,
        shipCity,
        delivStreet,
        delivCity,
        shippingDate,
        deliveryDate,
        acceptedParcels
    } = props
    
    return (
        <ul className={cls.container}>
            {acceptedParcels.map(({type, details, cost, recipient, sender}, i: number) => {
                return (
                    <li key={`${i}${sender}`}>
                        <BasisBlock>
                            <AcceptedParcel
                                type={type}
                                details={details}
                                shipStreet={shipStreet}
                                shipCity={shipCity}
                                delivStreet={delivStreet}
                                delivCity={delivCity}
                                shippingDate={shippingDate}
                                deliveryDate={deliveryDate}
                                cost={cost}
                                recipient={recipient}
                                sender={sender}
                            />
                        </BasisBlock>
                    </li>
                )
            })}
        </ul>
    )
}