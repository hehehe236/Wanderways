import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../../src/utils/const';

test.describe('Parcel Requested page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        const component = page.getByRole('button', { name: 'Rides' });
        await component.click();
        const button = page.locator('li > a > button').filter({
            has: page.locator('div > p'),
            hasText: 'Requests',
        });
        await button.click();
        await page.waitForURL(`${BASE_URL_FRONT}ride/4`);

        await page.getByTestId('btnViewAll').click();
        await page.waitForURL(`${BASE_URL_FRONT}ride/4/requested`);
    });

    test('WhenParcelRequestedLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const countRequest = page.getByTestId('countRequest');
        await expect(countRequest).toBeVisible();

        const switcher = page.getByTestId('switcher');
        await expect(switcher).toBeVisible();

        const deliveryRequests = page.getByTestId('deliveryRequests');
        await expect(deliveryRequests).toBeVisible();
    });
});
