import { expect, Locator, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../src/utils/const';

const URL_REDIRECT_AVAILABLE = '/available-parcels';
const MESSAGE_SUCCESS = 'Ride successfully published';
const MESSAGE_ERROR_VEHICLE = 'Should choose a vehicle';
const MESSAGE_ERROR = 'This field is required';

test.describe('Create ride page', () => {
    let arrowBack: Locator;
    let formComponent: Locator;
    let linkComponent: Locator;
    let deliveryFrom: Locator;
    let deliveryFromOption: Locator;
    let shippingTo: Locator;
    let shippingToOption: Locator;
    let deliveryDate: Locator;
    let deliveryDateLabel: Locator;
    let deliveryDateOption: Locator;
    let chooseVehicle: Locator;
    let submitBtn: Locator;
    let toastMessage: Locator;
    let deliveryAddressError: Locator;
    let shippingAddressError: Locator;
    let deliveryDateError: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByRole('button', { name: 'Deliver parcel' }).click();

        arrowBack = page.getByRole('button', { name: 'Back' });
        formComponent = page.locator('form');
        linkComponent = page.getByTestId('addNew');
        deliveryFrom = page.locator('[id="Delivery\\ from"]');
        deliveryFromOption = page.getByRole('option', { name: 'Shevchenka St, 12, Kyiv,' });
        shippingTo = page.locator('[id="Shipping\\ to"]');
        shippingToOption = page.getByRole('option', { name: 'Nauky St, 99, Poltava,' });
        deliveryDate = page.locator('input[name="deliveryDate"]');
        deliveryDateLabel = page.getByLabel('Choose Saturday, November 2nd,');
        deliveryDateOption = page.getByRole('option', { name: '3:30 PM' });
        chooseVehicle = page.getByText('Skoda RoomsterVan');
        submitBtn = page.getByRole('button', { name: 'Publish ride' });
        toastMessage = page.locator('.Toastify');
        deliveryAddressError = page.locator('#deliveryAddress');
        shippingAddressError = page.locator('#shippingAddress');
        deliveryDateError = page.locator('#deliveryDate');
    });

    test('WhenCreateParcelPageLoaded__AllComponentsAreVisible_AndURLIsCorrect', async ({
        page,
    }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}ride`);
        await expect(arrowBack).toBeVisible();
        await expect(formComponent).toBeVisible();
        await expect(linkComponent).toBeVisible();
    });

    test('WhenFormFillValidValues_AndSubmit_RedirectToAvailableParcels', async ({ page }) => {
        await deliveryFrom.click();
        await deliveryFromOption.click();
        await shippingTo.click();
        await shippingToOption.click();
        await deliveryDate.click();
        await deliveryDateLabel.click();
        await deliveryDateOption.click();
        await chooseVehicle.first().click();
        await submitBtn.click();

        const toast = toastMessage;
        await expect(toast).toHaveText(MESSAGE_SUCCESS);

        await page.goto(URL_REDIRECT_AVAILABLE, { waitUntil: 'commit' });
        await expect(page).toHaveURL(URL_REDIRECT_AVAILABLE);
    });

    test('WhenFormFillValuesWithoutChooseVehicle_AndSubmit_ToastErrorIsVisible', async () => {
        await deliveryFrom.click();
        await deliveryFromOption.click();
        await shippingTo.click();
        await shippingToOption.click();
        await deliveryDate.click();
        await deliveryDateLabel.click();
        await deliveryDateOption.click();
        await submitBtn.click();

        const toast = toastMessage;
        await expect(toast).toHaveText(MESSAGE_ERROR_VEHICLE);
    });

    test('WhenFormFillValuesWithout_AndSubmit_ErrorIsShown', async () => {
        await submitBtn.click();

        const error = deliveryAddressError.getByText(MESSAGE_ERROR);
        await expect(error).toHaveText(MESSAGE_ERROR);

        const shippingAddressErrr = shippingAddressError.getByText(MESSAGE_ERROR);
        await expect(shippingAddressErrr).toHaveText(MESSAGE_ERROR);

        const deliveryDateErrr = deliveryDateError.getByText(MESSAGE_ERROR);
        await expect(deliveryDateErrr).toHaveText(MESSAGE_ERROR);
    });
});
