export const deserializeAddress = (address: string) => {
    const parts = address.split(',');

    const street = parts[0].trim() + ', ' + parts[1].trim();
    const city = parts[2].trim();
    const country = 'Ukraine';

    return {
        country: country,
        city: city,
        street: street,
    };
};
