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

export const ValidateSchemaParcelCreateForm = Yup.object().shape({
    selectType: Yup.object({
        label: Yup.string().required('fieldRequired'),
        value: Yup.string().required('fieldRequired'),
    }),
    detailsParcel: Yup.string().trim().max(512, 'maxCharacters_512'),
    deliveryAddress: Yup.object({
        label: Yup.string().required('fieldRequired'),
        value: Yup.string().required('fieldRequired'),
    }),
    shippingAddress: Yup.object({
        label: Yup.string().required('fieldRequired'),
        value: Yup.string().required('fieldRequired'),
    }),
    recipientName: Yup.string()
        .trim()
        .min(3, 'minCharacters_3')
        .max(50, 'maxCharacters_50')
        .required('fieldRequired'),
    recipientLastName: Yup.string()
        .trim()
        .test('is-valid-min-length', 'minCharacters_3', function (value) {
            if (!value) return true;
            return value.length >= 3;
        })
        .test('is-valid-max-length', 'maxCharacters_50', function (value) {
            if (!value) return true;
            return value.length <= 50;
        }),
    recipientEmail: Yup.string().email('formatEmail'),
    recipientPhone: Yup.string().test('is-valid-phone', 'formatPhone', (value) => {
        if (value === '+380') return true;
        return isPhoneValid(value);
    }),
    deliveryDate: Yup.date().required('fieldRequired'),
});
