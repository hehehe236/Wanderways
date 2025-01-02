import * as Yup from 'yup';

export const ValidateSchemaNewPasswordForm = Yup.object().shape({
    password: Yup.string()
        .trim()
        .min(6, 'minCharacters_6')
        .max(50, 'maxCharacters_50')
        .required('fieldRequired'),
    confirmNewPassword: Yup.string()
        .trim()
        .oneOf([Yup.ref('password')], 'matchPasswords')
        .required('fieldRequired'),
});
