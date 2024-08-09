import * as Yup from 'yup';

export const ValidateSchemaRideCreateForm = Yup.object().shape({
    deliveryAddress: Yup.object({
        label: Yup.string().required('This field is required'),
        value: Yup.string().required('This field is required'),
    }),
    shippingAddress: Yup.object({
        label: Yup.string().required('This field is required'),
        value: Yup.string().required('This field is required'),
    }),
    deliveryDate: Yup.date().required('This field is required'),
    vehicleId: Yup.number(),
});
