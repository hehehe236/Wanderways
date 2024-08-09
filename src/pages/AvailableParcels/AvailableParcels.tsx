import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';
import notification from '@/utils/NotificationManager.ts';

const SUCCESS_MESSAGE = 'Ride successfully published';

const AvailableParcels = () => {
    notification.showSuccess(SUCCESS_MESSAGE);
    return <ArrowBack />;
};

export default AvailableParcels;
