import * as Yup from 'yup';

const isVehicleTypeExcluded = (vehicleType: string): boolean => {
    return vehicleType === '3' || vehicleType === '4';
};

export const ValidateSchemaProfileVehicleForm = Yup.object().shape({
    vehicleType: Yup.object().required('fieldRequired'),
    // TODO: change validate after select will be ready
    modelName: Yup.string()
        .trim()
        .test('log-vehicle-type', 'fieldRequired', function (value) {
            const { vehicleType } = this.parent;

            if (isVehicleTypeExcluded(vehicleType?.value)) return true;

            return Yup.string()
                .min(3, 'minCharacters_3')
                .max(50, 'maxCharacters_50')
                .required()
                .isValidSync(value);
        }),
    modelType: Yup.object().test('log-vehicle-type', 'fieldRequired', function (value) {
        const { vehicleType } = this.parent;

        if (isVehicleTypeExcluded(vehicleType?.value)) return true;

        return !!value;
    }),
    idNumber: Yup.string()
        .trim()
        .test('log-vehicle-type', 'fieldRequired', function (value) {
            const { vehicleType } = this.parent;

            if (isVehicleTypeExcluded(vehicleType?.value)) return true;

            return Yup.string()
                .min(3, 'minCharacters_3')
                .max(50, 'maxCharacters_50')
                .required()
                .isValidSync(value);
        }),
});
