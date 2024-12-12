import * as Yup from 'yup';

export const ValidateSchemaNewPasswordForm = Yup.object().shape({
    password: Yup.string()
        .trim()
        .min(6, 'Minimum 6 characters')
        .max(50, 'Maximum 50 characters')
        .required('This field is required'),
    confirmNewPassword: Yup.string()
        .trim()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('This field is required'),
});
