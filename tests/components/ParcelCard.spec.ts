import { expect, Locator, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../../src/utils/const';

const checkParcelCardCommonElements = async (parcelCard: Locator) => {
    const icon_parcel = parcelCard.getByTestId('icon_parcel');
    await expect(icon_parcel).toBeVisible();

    const type = parcelCard.getByTestId('type');
    await expect(type).toBeVisible();

    const details = parcelCard.getByTestId('details');
    await expect(details).toBeVisible();

    const rideRouteDetails = parcelCard.getByTestId('rideRouteDetails');
    await expect(rideRouteDetails).toBeVisible();

    const icon_hgryvnia = parcelCard.getByTestId('icon_hgryvnia');
    await expect(icon_hgryvnia).toBeVisible();

    const cost = parcelCard.getByTestId('cost');
    await expect(cost).toBeVisible();

    const price = parcelCard.getByTestId('price');
    await expect(price).toBeVisible();
};

test.describe('Parcel Card', () => {
    let parcelCards: Locator;
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
        parcelCards = page.locator('[data-testid="parcelCard"]');
    });

    test('WhenRidePageLoaded_AndRequestedParcels_ComponentsParcelCardAreVisible', async () => {
        const parcelCard = parcelCards.nth(0);
        await expect(parcelCard).toBeVisible();
        await checkParcelCardCommonElements(parcelCard);

        const btnApprove = parcelCard.getByRole('button', { name: 'Approve' });
        await expect(btnApprove).toBeVisible();

        const icon_close = parcelCard.getByTestId('icon_close');
        await expect(icon_close).toBeVisible();
    });

    test('WhenRidePageLoaded_AndAcceptedParcels_ComponentsParcelCardAreVisible', async () => {
        const parcelCard = parcelCards.nth(1);

        await expect(parcelCard).toBeVisible();
        await checkParcelCardCommonElements(parcelCard);

        const recipient = parcelCard.getByTestId('recipient');
        await expect(recipient).toBeVisible();

        const sender = parcelCard.getByTestId('sender');
        await expect(sender).toBeVisible();

        const btnConfirmDelivery = parcelCard.getByRole('button', { name: 'Confirm delivery' });
        await expect(btnConfirmDelivery).toBeVisible();
    });

    test('WhenRidePageLoaded_AndClickSwitcher_BtnApproveChangeIsVisible', async ({ page }) => {
        await page.getByRole('button', { name: 'My Requests' }).click();
        const parcelCard = parcelCards.nth(0);
        const btnApprove = parcelCard.getByRole('button', { name: 'Approve' });
        await expect(btnApprove).toHaveCount(0);

        await page.getByRole('button', { name: 'From Senders' }).click();
        await expect(btnApprove).toBeVisible();
    });
});
