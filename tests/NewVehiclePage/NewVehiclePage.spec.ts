import { expect, Locator, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('New vehicle page', () => {
    let arrowBack: Locator;
    let profileTitleComponent: Locator;
    let profileEditFormComponent: Locator;
    let toastMessageSuccess: Locator;
    let vehicleType: Locator;
    let modelName: Locator;
    let modelType: Locator;
    let idNumber: Locator;
    let submitBtn: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByTestId('headerAvatar').click();
        await page.getByRole('link', { name: 'My vehicles' }).click();
        await page.getByRole('button', { name: 'Add new vehicle' }).click();
        await page.waitForURL(`${BASE_URL_FRONT}profile/new-vehicle`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/new-vehicle`);

        arrowBack = page.getByRole('button', { name: 'Back' });
        profileTitleComponent = page.getByText('Add new vehicle');
        profileEditFormComponent = page.getByTestId('vehicleForm');
        toastMessageSuccess = page.locator('.Toastify__toast--success');
        vehicleType = page.getByTestId('vehicleType');
        modelName = page.getByTestId('modelName');
        modelType = page.getByTestId('modelType');
        idNumber = page.getByTestId('idNumber');
        submitBtn = page.getByRole('button', { name: 'Add Vehicle' });
    });

    test('WhenNewVehiclePageLoaded_URLIsCorrect_AndComponentsAreVisible', async () => {
        await expect(arrowBack).toBeVisible();
        await expect(profileTitleComponent).toBeVisible();
        await expect(profileEditFormComponent).toBeVisible();
    });

    test('WhenFormFillValidValues_AndChooseCar_AndSubmit_ToastSuccess', async ({ page }) => {
        await vehicleType.click();
        await page.getByRole('option', { name: 'Car' }).click();
        await modelName.click();
        await page.getByLabel('Model name').fill('Ford');
        await modelType.click();
        await page.getByRole('option', { name: 'Sedan' }).click();
        await idNumber.click();
        await page.getByLabel('ID number').fill('111111');
        await submitBtn.click();

        const toast = toastMessageSuccess;
        await expect(toast).toBeVisible();
    });

    test('WhenFormFillValidValues_AndChooseBicycle_AndSubmit_ToastSuccess', async ({ page }) => {
        await vehicleType.click();
        await page.getByRole('option', { name: 'Bicycle' }).click();
        await submitBtn.click();

        const toast = toastMessageSuccess;
        await expect(toast).toBeVisible();
    });

    test('WhenFormNotFill_AndSubmit_ErrorMsgIsShown', async () => {
        await submitBtn.click();
        await expect(vehicleType.getByText('This field is required')).toBeVisible();
        await expect(modelName.getByText('This field is required')).toBeVisible();
        await expect(modelType.getByText('This field is required')).toBeVisible();
        await expect(idNumber.getByText('This field is required')).toBeVisible();
    });
});
