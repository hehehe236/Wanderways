import * as Yup from 'yup';

export const ValidateSchemaSendEmailForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This field is required'),
});
