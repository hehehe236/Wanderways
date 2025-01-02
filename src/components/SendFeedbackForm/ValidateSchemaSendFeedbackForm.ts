import * as Yup from 'yup';

export const ValidateSchemaSendFeedbackForm = Yup.object().shape({
    feedback: Yup.string()
        .trim()
        .min(3, 'minCharacters_3')
        .max(512, 'maxCharacters_512')
        .required('fieldRequired'),
});
