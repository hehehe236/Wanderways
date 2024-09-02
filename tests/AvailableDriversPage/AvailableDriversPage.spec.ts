import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Available drivers page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByRole('button', { name: 'Send parcel' }).click();
        await page.locator('.custom-select__input-container').first().click();
        await page.getByRole('option', { name: 'Clothing' }).click();
        await page.locator('input[name="deliveryDate"]').click();
        await page.getByLabel('Choose Saturday, October 5th,').click();
        await page.getByRole('option', { name: '11:30 AM' }).click();
        await page
            .locator(
                '[id="Delivery\\ from"] > .custom-select__control > .custom-select__value-container > .custom-select__input-container'
            )
            .click();
        await page.getByRole('option', { name: 'Vasylkivska St, 45, Kharkiv,' }).click();
        await page
            .locator(
                '[id="Shipping\\ to"] > .custom-select__control > .custom-select__value-container > .custom-select__input-container'
            )
            .click();
        await page.getByRole('option', { name: 'Zakhidna St, 8, Chernivtsi,' }).click();
        await page.getByLabel('Recipient name').click();
        await page.getByLabel('Recipient name').fill('Bob');
        await page.getByLabel('Recipient email').click();
        await page.getByLabel('Recipient email').fill('example@example.com.ua');
        await page.getByRole('button', { name: 'Create parcel' }).click();
        await page.getByRole('button', { name: 'Find driver' }).click();
    });

    test('WhenAvailableDriversPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({
        page,
    }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}available-drivers`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const availableDriversCountComponent = page.getByTestId('availableDriversCount');
        await expect(availableDriversCountComponent).toBeVisible();

        const availableDriversTransit = page.getByTestId('availableDriversRoute');
        await expect(availableDriversTransit).toBeVisible();

        const availableDriversList = page.getByTestId('availableDriversList');
        await expect(availableDriversList).toBeVisible();
    });
});
