import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('My vaehicles page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByTestId('headerAvatar').click();
        await page.getByRole('link', { name: 'My vehicles' }).click();
    });

    test('WhenMyVaehiclesPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        await page.waitForURL(`${BASE_URL_FRONT}profile/vehicles`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/vehicles`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const profileTitleComponent = page.getByText('My vehicles');
        await expect(profileTitleComponent).toBeVisible();

        const profileEditFormComponent = page.getByTestId('vehicleList');
        await expect(profileEditFormComponent).toBeVisible();

        const btnComponent = page.getByRole('button', { name: 'Add new vehicle' });
        await expect(btnComponent).toBeVisible();
    });

    test('WhenMyVehiclesPageLoaded_AndClickBtnAdd_RedirectToNewVehicle', async ({ page }) => {
        await page.waitForURL(`${BASE_URL_FRONT}profile/vehicles`);
        const btnComponent = page.getByRole('button', { name: 'Add new vehicle' });
        await btnComponent.click();

        await page.waitForURL(`${BASE_URL_FRONT}profile/new-vehicle`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/new-vehicle`);
    });
});
