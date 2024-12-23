import * as Yup from 'yup';

const isVehicleTypeExcluded = (vehicleType: string): boolean => {
    return vehicleType === 'Electric scooter' || vehicleType === 'Bicycle';
};

export const ValidateSchemaProfileVehicleForm = Yup.object().shape({
    vehicleType: Yup.object({
        label: Yup.string().required('fieldRequired'),
        value: Yup.string().required('fieldRequired'),
    }).required(),
    // TODO: change validate after select will be ready
    modelName: Yup.string()
        .trim()
        .test('log-vehicle-type', 'fieldRequired', function (value) {
            const { vehicleType } = this.parent;

            if (isVehicleTypeExcluded(vehicleType?.label)) return true;

            return Yup.string()
                .min(3, 'minCharacters_3')
                .max(50, 'maxCharacters_50')
                .required()
                .isValidSync(value);
        }),
    modelType: Yup.object().test('log-vehicle-type', 'fieldRequired', function (value) {
        const { vehicleType } = this.parent;

        if (isVehicleTypeExcluded(vehicleType?.label)) return true;

        return !!value;
    }),
    idNumber: Yup.string()
        .trim()
        .test('log-vehicle-type', 'fieldRequired', function (value) {
            const { vehicleType } = this.parent;

            if (isVehicleTypeExcluded(vehicleType?.label)) return true;

            return Yup.string()
                .min(3, 'minCharacters_3')
                .max(50, 'maxCharacters_50')
                .required()
                .isValidSync(value);
        }),
});
