import { expect, Locator, Page, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../src/utils/const';

const ERROR_MESSAGE_WITHOUT_PHONE_EMAIL = 'Should choose a phone or email';
const ERROR_MESSAGE_MIN = 'Minimum 3 characters';
const ERROR_MESSAGE_MAX = 'Maximum 50 characters';
const ERROR_MESSAGE_PHONE = 'Invalid format phone';
const ERROR_MESSAGE_EMAIL = 'Invalid email';
const VALID_NAME = 'Valid Name';
const INVALID_NAME = 'In';
const LONG_NAME = 'A'.repeat(51);
const EMPTY = '';
const VALID_PHONE = '380501122333';
const INVALID_PHONE = '380111111111';
const PHONE_DEFAULT = '+380';
const OPTION_TEXT = 'Clothing';
const DETAILS = 'Need to deliver a 2kg box with electronic products. Careful delivery required';
const VALID_EMAIL = 'example@examle.com';

test.describe('Create parcel page', (): void => {
    let arrowBack: Locator;
    let formComponent: Locator;
    let recipientName: Locator;
    let recipientNameError: Locator;
    let recipientSurname: Locator;
    let recipientSurnameError: Locator;
    let recipientPhone: Locator;
    let recipientPhoneError: Locator;
    let parcelType: Locator;
    let parcelTypeOption: Locator;
    let parcelTypeValue: Locator;
    let deliveryDate: Locator;
    let deliveryDateLabel: Locator;
    let deliveryDateOption: Locator;
    let deliveryFrom: Locator;
    let deliveryFromOption: Locator;
    let shippingTo: Locator;
    let shippingToOption: Locator;
    let submitBtn: Locator;
    let toastMessage: Locator;
    let detailsParcel: Locator;
    let email: Locator;
    let emailError: Locator;
    let modal: Locator;

    test.beforeEach(async ({ page }: { page: Page }): Promise<void> => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByRole('button', { name: 'Send parcel' }).click();

        arrowBack = page.getByRole('button', { name: 'Back' });
        formComponent = page.locator('form');
        recipientName = page.getByLabel('Recipient name');
        recipientNameError = page.locator('input#recipientName + div + p');
        recipientSurname = page.getByLabel('Recipient surname');
        recipientSurnameError = page.locator('input#recipientLastName + div + p');
        recipientPhone = page.locator('input[type="tel"]');
        recipientPhoneError = page.getByText(ERROR_MESSAGE_PHONE);
        parcelType = page
            .locator('div')
            .filter({ hasText: /^Select type$/ })
            .nth(1);
        parcelTypeOption = page.getByRole('option', { name: 'Clothing' });
        parcelTypeValue = page.locator('input[value="clothing"]');
        deliveryDate = page.locator('input[name="deliveryDate"]');
        deliveryDateLabel = page.getByLabel('Choose Thursday, August 22nd,');
        deliveryDateOption = page.getByRole('option', { name: '3:30 PM' });
        deliveryFrom = page.locator('[id="Delivery\\ from"]');
        deliveryFromOption = page.getByRole('option', { name: 'Shevchenka St, 12, Kyiv,' });
        shippingTo = page.locator('[id="Shipping\\ to"]');
        shippingToOption = page.getByRole('option', { name: 'Nauky St, 99, Poltava,' });
        submitBtn = page.getByRole('button', { name: 'Create parcel' });
        toastMessage = page.locator('.Toastify');
        detailsParcel = page.locator('#detailsParcel');
        email = page.locator('#recipientEmail');
        emailError = page.getByText(ERROR_MESSAGE_EMAIL);
        modal = page.locator('#modal-parcel-create-success');
    });

    test('WhenCreateParcelPageLoaded_AllComponentsAreVisible_AndURLIsCorrect', async ({
        page,
    }: {
        page: Page;
    }): Promise<void> => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}parcel`);
        await expect(arrowBack).toBeVisible();
        await expect(formComponent).toBeVisible();
    });

    test('WhenFormFillWithoutPhoneEmail_AndSubmit_ToastErrorIsVisible', async (): Promise<void> => {
        await parcelType.click();
        await parcelTypeOption.click();
        await deliveryDate.click();
        await deliveryDateLabel.click();
        await deliveryDateOption.click();
        await deliveryFrom.click();
        await deliveryFromOption.click();
        await shippingTo.click();
        await shippingToOption.click();
        await recipientName.click();
        await recipientName.fill(VALID_NAME);
        await recipientSurname.click();
        await recipientSurname.fill(VALID_NAME);
        await submitBtn.click();

        const toast = toastMessage;
        await expect(toast).toHaveText(ERROR_MESSAGE_WITHOUT_PHONE_EMAIL);
    });

    test('WhenFormFillValidValues_AndSubmit_ModalSuccessIsOpen', async () => {
        await parcelType.click();
        await parcelTypeOption.click();
        await detailsParcel.click();
        await detailsParcel.fill(DETAILS);
        await deliveryDate.click();
        await deliveryDateLabel.click();
        await deliveryDateOption.click();
        await deliveryFrom.click();
        await deliveryFromOption.click();
        await shippingTo.click();
        await shippingToOption.click();
        await recipientName.click();
        await recipientName.fill(VALID_NAME);
        await recipientSurname.click();
        await recipientSurname.fill(VALID_NAME);
        await recipientPhone.click();
        await recipientPhone.fill(VALID_PHONE);
        await email.click();
        await email.fill(VALID_EMAIL);
        await submitBtn.click();

        await expect(modal).toBeVisible();
    });

    test('WhenRecipientNameFieldIsEmpty_ClickEnter', async () => {
        await recipientName.fill(EMPTY);
        await recipientName.press('Enter');

        const errorMessage = recipientNameError;
        await expect(errorMessage).toHaveText(ERROR_MESSAGE_MIN);
    });

    test('WhenRecipientNameFieldIsNotEmpty_AndCountCharFrom3To50_ClickEnter', async () => {
        await recipientName.fill(VALID_NAME);
        await recipientName.press('Enter');

        const errorMessage = recipientNameError;
        await expect(errorMessage).toBeHidden();
    });

    test('WhenRecipientNameFieldIsNotEmpty_ButValidationFails_ErrorMsgIsShow', async () => {
        await recipientName.fill(INVALID_NAME);
        await recipientName.press('Enter');

        const shortNameErrorMsg = recipientNameError;
        await expect(shortNameErrorMsg).toHaveText(ERROR_MESSAGE_MIN);

        await recipientName.fill(LONG_NAME);
        await recipientName.press('Enter');

        const longNameErrorMsg = recipientNameError;
        await expect(longNameErrorMsg).toHaveText(ERROR_MESSAGE_MAX);
    });

    test('WhenRecipientSurnameFilled_OrEmpty_NoErrorMsg', async () => {
        await recipientSurname.fill(EMPTY);
        await recipientSurname.press('Enter');

        const emptySurnameErrorMsg = recipientSurnameError;
        await expect(emptySurnameErrorMsg).toBeHidden();

        await recipientSurname.fill(VALID_NAME);
        await recipientSurname.press('Enter');

        const validNameErroMsg = recipientSurnameError;
        await expect(validNameErroMsg).toBeHidden();
    });

    test('WhenRecipientSurnameField_AndValidationFailed_ErrorMsgIsShown', async () => {
        await recipientSurname.fill(INVALID_NAME);
        await recipientSurname.press('Enter');

        const shortSurnamaErrorMsg = recipientSurnameError;
        await expect(shortSurnamaErrorMsg).toHaveText(ERROR_MESSAGE_MIN);

        await recipientSurname.fill(LONG_NAME);
        await recipientSurname.press('Enter');

        const longSurnameErrorMsg = recipientSurnameError;
        await expect(longSurnameErrorMsg).toHaveText(ERROR_MESSAGE_MAX);
    });

    test('WhenRecipientPhoneFieldIsEmpty_ClickEnter', async () => {
        await recipientPhone.fill(EMPTY);
        await recipientPhone.press('Enter');

        const errorMessage = recipientPhoneError;
        await expect(errorMessage).toHaveText(ERROR_MESSAGE_PHONE);
    });

    test('WhenRecipientPhoneFieldFilled_AndValidationSuccess_NoErrorMsg', async () => {
        await recipientPhone.fill(PHONE_DEFAULT);
        await recipientPhone.press('Enter');

        const defaultPhoneErrorMsg = recipientPhoneError;
        await expect(defaultPhoneErrorMsg).toBeHidden();

        await recipientPhone.fill(VALID_PHONE);
        await recipientPhone.press('Enter');

        const validPhoneErrorMsg = recipientPhoneError;
        await expect(validPhoneErrorMsg).toBeHidden();
    });

    test('WhenRecipientPhoneFieldFilled_AndValidationFailed_ErrorMsgIsShown', async () => {
        await recipientPhone.fill(INVALID_PHONE);
        await recipientPhone.press('Enter');

        const errorMessage = recipientPhoneError;
        await expect(errorMessage).toHaveText(ERROR_MESSAGE_PHONE);
    });

    test('WhenSelectTypeFieldClick_AndChooseClothing', async () => {
        const selectInput = parcelType;
        await selectInput.click();

        const option = parcelTypeOption;
        await option.click();

        const valueInput = parcelTypeValue;
        await expect(valueInput).toHaveValue(OPTION_TEXT.toLowerCase());
    });

    test('WhenRecipientEmailFilled_OrEmpty_NoErrorMsg', async () => {
        await email.fill('');
        await email.press('Enter');

        const emptyEmailErrorMsg = emailError;
        await expect(emptyEmailErrorMsg).toBeHidden();

        await email.fill(VALID_EMAIL);
        await email.press('Enter');

        const validEmailErrorMsg = emailError;
        await expect(validEmailErrorMsg).toBeHidden();
    });

    test('WhenRecipientEmailFieldFillInvalidEmail_ClickEnter', async ({ page }) => {
        await email.fill('example.com');
        await email.press('Enter');

        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
        });
    });
});
