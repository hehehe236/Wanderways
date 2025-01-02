import * as Yup from 'yup';

export const ValidateSchemaSendEmailForm = Yup.object().shape({
    email: Yup.string().email('formatEmail').required('fieldRequired'),
});
