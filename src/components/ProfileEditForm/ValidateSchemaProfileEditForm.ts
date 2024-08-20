import * as Yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string | undefined) => {
    if (!phone) return false;
    try {
        return phoneUtil.isValidNumberForRegion(phoneUtil.parseAndKeepRawInput(phone), 'UA');
    } catch (_) {
        return false;
    }
};

export const ValidateSchemaProfileEditForm = Yup.object().shape({
    recipientName: Yup.string()
        .trim()
        .min(3, 'Minimum 3 characters')
        .max(50, 'Maximum 50 characters')
        .required('This field is required'),
    recipientLastName: Yup.string()
        .trim()
        .test('is-valid-min-length', 'Minimum 3 characters', function (value) {
            if (!value) return true;
            return value.length >= 3;
        })
        .test('is-valid-max-length', 'Maximum 50 characters', function (value) {
            if (!value) return true;
            return value.length <= 50;
        }),
    recipientPhone: Yup.string().test('is-valid-phone', 'Invalid format phone', (value) => {
        if (value === '+380') return true;
        return isPhoneValid(value);
    }),
});
