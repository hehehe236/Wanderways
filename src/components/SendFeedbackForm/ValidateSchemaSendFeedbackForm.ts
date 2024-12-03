import * as Yup from 'yup';

export const ValidateSchemaSendFeedbackForm = Yup.object().shape({
    feedback: Yup.string()
        .trim()
        .min(3, 'Minimum 3 characters')
        .max(512, 'Maximum 512 characters')
        .required('This field is required'),
});
