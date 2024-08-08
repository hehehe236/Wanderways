import * as Yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string | undefined) => {
    if (!phone) return false;
    try {
        return phoneUtil.isValidNumberForRegion(phoneUtil.parseAndKeepRawInput(phone), 'UA');
    } catch (error) {
        return false;
    }
};

export const ValidateSchemaParcelCreateForm = Yup.object().shape({
    selectType: Yup.object({
        label: Yup.string().required('This field is required'),
        value: Yup.string().required('This field is required'),
    }),
    detailsParcel: Yup.string().trim().max(512, 'Maximum 512 characters'),
    deliveryAddress: Yup.object({
        label: Yup.string().required('This field is required'),
        value: Yup.string().required('This field is required'),
    }),
    shippingAddress: Yup.object({
        label: Yup.string().required('This field is required'),
        value: Yup.string().required('This field is required'),
    }),
    recipientName: Yup.string()
        .trim()
        .min(3, 'Minimum 3 characters')
        .max(50, 'Maximum 50 characters')
        .required('This field is required'),
    recipientLastName: Yup.string().trim().max(50, 'Maximum 50 characters'),
    recipientEmail: Yup.string().email('Invalid email'),
    recipientPhone: Yup.string().test('is-valid-phone', 'Invalid format phone', (value) => {
        if (value === '+380') return true;
        return isPhoneValid(value);
    }),
    deliveryDate: Yup.date().required('This field is required'),
});
