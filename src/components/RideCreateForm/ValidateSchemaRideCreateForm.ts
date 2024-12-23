import * as Yup from 'yup';

export const ValidateSchemaRideCreateForm = Yup.object().shape({
    deliveryAddress: Yup.object({
        label: Yup.string().required('fieldRequired'),
        value: Yup.string().required('fieldRequired'),
    }),
    shippingAddress: Yup.object({
        label: Yup.string().required('fieldRequired'),
        value: Yup.string().required('fieldRequired'),
    }),
    deliveryDate: Yup.date().required('fieldRequired'),
    vehicleId: Yup.number(),
});
