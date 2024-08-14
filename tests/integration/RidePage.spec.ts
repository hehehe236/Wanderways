import { expect, test } from '@playwright/test';
import { BASE_URL } from '../../src/utils/const';
import { RequestAccepted } from '../types';

const URL_GET_RIDE = `${BASE_URL}/api/rides/1`;
const URL_ACCEPTED = `${BASE_URL}/api/rides/1/accepted`;

test.describe('WhenClickRide_ValidateApiResponse', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        const component = page.getByRole('button', { name: 'Rides' });
        await component.click();
        const element = page.getByTestId('rides-list').locator('li > a > button').first();
        await element.click();
    });

    test('WhenRidePageLoaded_AndStatus200_RideIsCorrect', async ({ request }) => {
        const response = await request.get(URL_GET_RIDE);
        expect(response.status()).toBe(200);

        const ride = await response.json();
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

    test('WhenRidePageLoaded_AndStatus200_AcceptedIsCorrect', async ({ request }) => {
        const response = await request.get(URL_ACCEPTED);
        expect(response.status()).toBe(200);
        const rides = await response.json();
        expect(Array.isArray(rides)).toBe(true);

        rides.forEach((ride: RequestAccepted) => {
            expect(ride).toHaveProperty('parcelId');
            expect(ride).toHaveProperty('rideId');
            expect(ride).toHaveProperty('type');
            expect(ride).toHaveProperty('details');
            expect(ride).toHaveProperty('cost');
            expect(ride).toHaveProperty('departureAddress');
            expect(ride).toHaveProperty('departureDate');
            expect(ride).toHaveProperty('arrivalAddress');
            expect(ride).toHaveProperty('arrivalDate');
            expect(ride).toHaveProperty('recipient');
            expect(ride).toHaveProperty('sender');
        });
    });
});
