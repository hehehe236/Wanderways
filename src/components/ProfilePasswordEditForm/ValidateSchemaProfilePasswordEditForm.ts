import * as Yup from 'yup';

const passwordValidation = Yup.string()
    .trim()
    .min(6, 'Minimum 6 characters')
    .max(50, 'Maximum 50 characters')
    .required('This field is required');

export const ValidateSchemaProfilePasswordEditForm = Yup.object().shape({
    currentPassword: passwordValidation,
    newPassword: passwordValidation,
    confirmNewPassword: passwordValidation.oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});
