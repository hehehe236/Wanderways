import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../../src/utils/const';

test.describe('Parcel page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        const element = page.getByTestId('parcels-list').locator('li > a > button').first();
        await element.click();
    });

    test('WhenParcelPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}parcel/1`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const parcelDetailsInfoComponent = page.locator('#parcel-details-info');
        await expect(parcelDetailsInfoComponent).toBeVisible();

        const parcelRouteDetailsComponent = page.locator('#parcel-route-details');
        await expect(parcelRouteDetailsComponent).toBeVisible();

        const recipientComponent = page.locator('#recipient');
        await expect(recipientComponent).toBeVisible();
    });
});
