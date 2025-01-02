import * as Yup from 'yup';

export const ValidateSchemaUserCredentialsForm = Yup.object().shape({
    email: Yup.string().email('formatEmail').required('fieldRequired'),
    password: Yup.string()
        .trim()
        .min(6, 'minCharacters_6')
        .max(50, 'maxCharacters_50')
        .required('fieldRequired'),
});
