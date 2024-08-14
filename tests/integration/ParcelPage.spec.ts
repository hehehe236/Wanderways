import { expect, test } from '@playwright/test';
import { BASE_URL } from '../../src/utils/const';

const URL_GET_PARCEL = `${BASE_URL}/api/parcels/1`;

test.describe('WhenClickParcel_ValidateApiResponse', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const element = page.getByTestId('parcels-list').locator('li > a > button').first();
        await element.click();
    });

    test('WhenParcelPageLoaded_AndStatus200_ParcelIsCorrect', async ({ request }) => {
        const response = await request.get(URL_GET_PARCEL);
        expect(response.status()).toBe(200);

        const parcel = await response.json();
        expect(parcel).toHaveProperty('senderId');
        expect(parcel).toHaveProperty('parcelId');
        expect(parcel).toHaveProperty('status');
        expect(parcel).toHaveProperty('cost');
        expect(parcel).toHaveProperty('details');
        expect(parcel).toHaveProperty('shippingAddress');
        expect(parcel).toHaveProperty('shippingDate');
        expect(parcel).toHaveProperty('deliveryAddress');
        expect(parcel).toHaveProperty('deliveryDate');
        expect(parcel).toHaveProperty('recipient');
        expect(parcel).toHaveProperty('type');
        if ('driver' in parcel) {
            expect(parcel).toHaveProperty('driver');
        }
    });
});
