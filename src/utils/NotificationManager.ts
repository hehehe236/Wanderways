import { toast } from 'react-toastify';

class NotificationManager {
    private static instance: NotificationManager;

    private toastId = 'toastId';

    private ERROR_MESSAGE = 'Should choose a phone or email';
    private SUCCESS_MESSAGE = 'This is a success message';
    private INFO_MESSAGE = 'This is an info message';
    private WARNING_MESSAGE = 'This is a warning message';

    private BORDER_RADIUS = '20px';
    private TEXT_COLOR = '#ffffff';

    private BACKGROUND_COLOR_ERROR = '#e97e80';
    private BACKGROUND_COLOR_SUCCESS = '#5BAD77';
    private BACKGROUND_COLOR_INFO = '#6377E2';
    private BACKGROUND_COLOR_WARNING = '#E9BC7E';

    private constructor() {}

    public static getInstance(): NotificationManager {
        if (!NotificationManager.instance) {
            NotificationManager.instance = new NotificationManager();
        }
        return NotificationManager.instance;
    }

    showError() {
        toast.error(this.ERROR_MESSAGE, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_ERROR,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS,
            },
        });
    }

    showSuccess() {
        toast.success(this.SUCCESS_MESSAGE, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_SUCCESS,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS,
            },
        });
    }

    showInfo() {
        toast.info(this.INFO_MESSAGE, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_INFO,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS,
            },
        });
    }
    showWarning() {
        toast.warn(this.WARNING_MESSAGE, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_WARNING,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS,
            },
        });
    }
}

const notification = NotificationManager.getInstance();
export default notification;
