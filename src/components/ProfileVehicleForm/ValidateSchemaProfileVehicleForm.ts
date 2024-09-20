import * as Yup from 'yup';

const isVehicleTypeExcluded = (vehicleType: string): boolean => {
    return vehicleType === 'Electric scooter' || vehicleType === 'Bicycle';
};

export const ValidateSchemaProfileVehicleForm = Yup.object().shape({
    vehicleType: Yup.object({
        label: Yup.string().required('This field is required'),
        value: Yup.string().required('This field is required'),
    }).required(),
    // TODO: change validate after select will be ready
    modelName: Yup.string()
        .trim()
        .test('log-vehicle-type', 'This field is required', function (value) {
            const { vehicleType } = this.parent;

            if (isVehicleTypeExcluded(vehicleType?.label)) return true;

            return Yup.string()
                .min(3, 'Minimum 3 characters')
                .max(50, 'Maximum 50 characters')
                .required()
                .isValidSync(value);
        }),
    modelType: Yup.object().test('log-vehicle-type', 'This field is required', function (value) {
        const { vehicleType } = this.parent;

        if (isVehicleTypeExcluded(vehicleType?.label)) return true;

        if (value) return true;
        return this.createError({ message: 'This field is required' });
    }),
    idNumber: Yup.string()
        .trim()
        .test('log-vehicle-type', 'This field is required', function (value) {
            const { vehicleType } = this.parent;

            if (isVehicleTypeExcluded(vehicleType?.label)) return true;

            return Yup.string()
                .min(3, 'Minimum 3 characters')
                .max(50, 'Maximum 50 characters')
                .required()
                .isValidSync(value);
        }),
});
