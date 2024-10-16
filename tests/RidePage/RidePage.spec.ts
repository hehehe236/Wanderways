import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../../src/utils/const';

test.describe('Ride page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        const component = page.getByRole('button', { name: 'Rides' });
        await component.click();
    });

    test('WhenParcelPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        const element = page.getByTestId('rides-list').locator('li > a > button').first();
        await element.click();
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

    test('WhenStatusNew_AndHasRequests_ListRequestsIsVisible', async ({ page }) => {
        const button = page.locator('li > a > button').filter({
            has: page.locator('div > p'),
            hasText: 'Requests',
        });
        await button.click();
        await page.waitForURL(`${BASE_URL_FRONT}ride/4`);

        const titleRequest = page.getByTestId('titleRequest');
        await expect(titleRequest).toBeVisible();
        await expect(titleRequest).toHaveText('Requested parcels');

        const countRequest = page.getByTestId('countRequest');
        await expect(countRequest).toBeVisible();

        const switcher = page.getByTestId('switcher');
        await expect(switcher).toBeVisible();

        const btnViewAll = page.getByTestId('btnViewAll');
        await expect(btnViewAll).toBeVisible();

        const deliveryRequests = page.getByTestId('deliveryRequests');
        await expect(deliveryRequests).toBeVisible();
    });

    test('WhenHasRequests_AndClickBtnViewAll_RedirectToRequested', async ({ page }) => {
        const button = page.locator('li > a > button').filter({
            has: page.locator('div > p'),
            hasText: 'Requests',
        });
        await button.click();
        await page.waitForURL(`${BASE_URL_FRONT}ride/4`);

        await page.getByTestId('btnViewAll').click();

        await page.waitForURL(`${BASE_URL_FRONT}ride/4/requested`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}ride/4/requested`);
    });
});
