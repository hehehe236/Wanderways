import * as Yup from 'yup';

export const ValidateSchemaProfileEmailForm = Yup.object().shape({
    recipientEmail: Yup.string().email('Invalid email').required('This field is required'),
    recipientPassword: Yup.string()
        .trim()
        .min(6, 'Minimum 6 characters')
        .max(50, 'Maximum 50 characters')
        .required('This field is required'),
});
