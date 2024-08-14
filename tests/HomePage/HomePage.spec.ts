import { expect, Locator, test } from '@playwright/test';
import { BASE_URL_FRONT } from '../../src/utils/const';

test.describe('Home page', () => {
    let btnSendParcel: Locator;
    let btnDeliverParcels: Locator;
    let tabParcelsRides: Locator;
    let parcelList: Locator;
    let rideList: Locator;
    let tabRides: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        btnSendParcel = page.getByRole('button', { name: 'Send parcel' });
        btnDeliverParcels = page.getByRole('button', { name: 'Deliver parcel' });
        tabParcelsRides = page.getByText('ParcelsRides');
        parcelList = page.getByTestId('parcels-list');
        rideList = page.getByTestId('rides-list');
        tabRides = page.getByRole('button', { name: 'Rides' });
    });

    test('WhenHomePageLoaded_AllComponentsAreVisible_AndURLIsCorrect', async ({ page }) => {
        expect(page.url()).toBe(BASE_URL_FRONT);
        await expect(btnSendParcel).toBeVisible();
        await expect(btnDeliverParcels).toBeVisible();
        await expect(tabParcelsRides).toBeVisible();
        await expect(parcelList).toBeVisible();
    });

    test('WhenParcelManagerIsShown_AndClickComponent_RedirectToPageParcelOrRide', async ({
        page,
    }) => {
        await btnSendParcel.click();
        expect(page.url()).toBe(`${BASE_URL_FRONT}parcel`);

        await page.goto('/', { waitUntil: 'commit' });

        await btnDeliverParcels.click();
        expect(page.url()).toBe(`${BASE_URL_FRONT}ride`);
    });

    test('WhenHomePageLoaded_AndRidesClick_RidesListIsShown', async () => {
        await tabRides.click();
        await expect(rideList).toBeVisible();
    });
});
