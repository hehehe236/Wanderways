import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../../src/utils/const';

test.describe('Parcel page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
    });

    test('WhenParcelPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        const element = page.getByTestId('parcels-list').locator('li > a > button').first();
        await element.click();
        expect(page.url()).toBe(`${BASE_URL_FRONT}parcel/1`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const parcelDetailsInfoComponent = page.locator('#parcel-details-info');
        await expect(parcelDetailsInfoComponent).toBeVisible();

        const parcelDetailsDescriptionComponent = page.getByTestId('parcelDetailsDescription');
        await expect(parcelDetailsDescriptionComponent).toBeVisible();

        const parcelRouteDetailsComponent = page.locator('#parcel-route-details');
        await expect(parcelRouteDetailsComponent).toBeVisible();

        const recipientComponent = page.locator('#recipient');
        await expect(recipientComponent).toBeVisible();
    });

    test('WhenStatusNew_AndClickBtnFindDriver_RedirectToAvailableDrivers', async ({ page }) => {
        const button = page
            .locator('li > a > button')
            .filter({
                has: page.locator('div > div > p'),
                hasText: 'New',
            })
            .nth(0);
        await button.click();
        await page.waitForURL(`${BASE_URL_FRONT}parcel/2`);

        const btnFindDriver = page.getByTestId('btnFindDriver');
        await expect(btnFindDriver).toBeVisible();
        await btnFindDriver.click();

        expect(page.url()).toBe(`${BASE_URL_FRONT}available-drivers`);
    });

    test('WhenStatusNew_AndHasRequests_ListRequestsIsVisible', async ({ page }) => {
        const button = page.locator('li > a > button').filter({
            has: page.locator('div > p'),
            hasText: 'Requests',
        });
        await button.click();
        await page.waitForURL(`${BASE_URL_FRONT}parcel/3`);

        const titleRequest = page.getByTestId('titleRequest');
        await expect(titleRequest).toBeVisible();
        await expect(titleRequest).toHaveText('Requests');

        const countRequest = page.getByTestId('countRequest');
        await expect(countRequest).toBeVisible();

        const btnViewAll = page.getByTestId('btnViewAll');
        await expect(btnViewAll).toBeVisible();

        const requestsList = page.getByTestId('parcelRequests');
        await expect(requestsList).toBeVisible();
    });
});
