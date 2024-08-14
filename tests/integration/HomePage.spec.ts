import { test, expect, Locator } from '@playwright/test';
import { BASE_URL } from '../../src/utils/const';
import { RequestParcel, RequestRide } from '../types';

const URL_GET_PARCELS = `${BASE_URL}/api/parcels`;
const URL_GET_RIDES = `${BASE_URL}/api/rides`;

test.describe('ParcelsAndRidesTabs_ValidateApiResponseOnClick', () => {
    let parcelsButton: Locator;
    let ridesButton: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });

        parcelsButton = page.getByRole('button', { name: 'Parcels' });
        ridesButton = page.getByRole('button', { name: 'Rides' });
    });

    test('WhenButtonParcelsClick_ResponseStatus200_AndCorrectData', async ({ request }) => {
        await ridesButton.click();
        await parcelsButton.click();

        const response = await request.get(URL_GET_PARCELS);
        expect(response.status()).toBe(200);

        const parcels = await response.json();
        expect(Array.isArray(parcels)).toBe(true);

        parcels.forEach((parcel: RequestParcel) => {
            expect(parcel).toHaveProperty('senderId');
            expect(parcel).toHaveProperty('parcelId');
            expect(parcel).toHaveProperty('status');
            expect(parcel).toHaveProperty('cost');
            expect(parcel).toHaveProperty('shippingAddress');
            expect(parcel).toHaveProperty('shippingDate');
            expect(parcel).toHaveProperty('deliveryAddress');
            expect(parcel).toHaveProperty('deliveryDate');
            expect(parcel).toHaveProperty('type');
        });
    });

    test('WhenButtonRidesClick_ResponseStatus200_AndCorrectData', async ({ request }) => {
        await parcelsButton.click();
        await ridesButton.click();

        const response = await request.get(URL_GET_RIDES);
        expect(response.status()).toBe(200);

        const rides = await response.json();
        expect(Array.isArray(rides)).toBe(true);

        rides.forEach((ride: RequestRide) => {
            expect(ride).toHaveProperty('driverId');
            expect(ride).toHaveProperty('rideId');
            expect(ride).toHaveProperty('status');
            expect(ride).toHaveProperty('totalCost');
            expect(ride).toHaveProperty('departureAddress');
            expect(ride).toHaveProperty('departureDate');
            expect(ride).toHaveProperty('arrivalAddress');
            expect(ride).toHaveProperty('arrivalDate');
            expect(ride).toHaveProperty('parcelsTypes');
        });
    });
});
