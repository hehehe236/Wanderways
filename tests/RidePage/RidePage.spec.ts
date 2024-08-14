import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../../src/utils/const';

test.describe('Ride page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        const component = page.getByRole('button', { name: 'Rides' });
        await component.click();
        const element = page.getByTestId('rides-list').locator('li > a > button').first();
        await element.click();
    });

    test('WhenParcelPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}ride/1`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const rideDetailsInfoComponent = page.locator('#ride-details-info');
        await expect(rideDetailsInfoComponent).toBeVisible();

        const rideRouteDetailsComponent = page.locator('#ride-route-details');
        await expect(rideRouteDetailsComponent).toBeVisible();

        const acceptedParcelsComponent = page.locator('#accepted-parcels');
        await expect(acceptedParcelsComponent).toBeVisible();
    });
});
