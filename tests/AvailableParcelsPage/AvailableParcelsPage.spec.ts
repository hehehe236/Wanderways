import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Available parcel page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByRole('button', { name: 'Deliver parcel' }).click();
        await page.locator('.custom-select__input-container').first().click();
        await page.getByRole('option', { name: 'Shevchenka St, 12, Kyiv,' }).click();
        await page
            .locator(
                '[id="Shipping\\ to"] > .custom-select__control > .custom-select__value-container > .custom-select__input-container'
            )
            .click();
        await page.getByRole('option', { name: 'Kyivska St, 77, Rivne,' }).click();
        await page.getByRole('textbox').click();
        await page.getByLabel('Choose Saturday, October 5th,').click();
        await page.getByRole('option', { name: '11:30 AM' }).click();
        await page.getByText('Skoda RoomsterVan').click();
        await page.getByRole('button', { name: 'Publish ride' }).click();
    });

    test('WhenAvailableParcelsPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({
        page,
    }) => {
        await page.waitForURL(`${BASE_URL_FRONT}available-parcels`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}available-parcels`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const availableDriversCountComponent = page.getByTestId('availableDriversCount');
        await expect(availableDriversCountComponent).toBeVisible();

        const availableDriversTransit = page.getByTestId('availableDriversRoute');
        await expect(availableDriversTransit).toBeVisible();

        const availableDriversList = page.getByTestId('availableParcelsList');
        await expect(availableDriversList).toBeVisible();
    });
});
