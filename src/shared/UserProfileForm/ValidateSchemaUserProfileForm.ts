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

export const ValidateSchemaUserProfileFormProps = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, 'minCharacters_3')
        .max(50, 'maxCharacters_50')
        .required('fieldRequired'),
    surname: Yup.string()
        .trim()
        .test('is-valid-min-length', 'minCharacters_3', function (value) {
            if (!value) return true;
            return value.length >= 3;
        })
        .test('is-valid-max-length', 'maxCharacters_50', function (value) {
            if (!value) return true;
            return value.length <= 50;
        }),
    phone: Yup.string().test('is-valid-phone', 'formatPhone', (value) => {
        if (value === '+380') return true;
        return isPhoneValid(value);
    }),
    wantToBeDriver: Yup.boolean(),
});
