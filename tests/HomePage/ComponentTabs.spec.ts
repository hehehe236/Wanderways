import { test, expect, Locator } from '@playwright/test';

const colors = {
    white: 'rgb(255, 255, 255)',
    secondary: 'rgb(231, 236, 250)',
};

test.describe('Tabs component', () => {
    let parcelsButton: Locator;
    let ridesButton: Locator;

    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });

        parcelsButton = page.getByRole('button', { name: 'Parcels' });
        ridesButton = page.getByRole('button', { name: 'Rides' });
    });

    test('WhenHomePageLoaded_ButtonsParcelsAndRidesAreShown', async () => {
        await expect(parcelsButton).toBeVisible();
        await expect(ridesButton).toBeVisible();

        await expect(parcelsButton).toHaveText('Parcels');
        await expect(ridesButton).toHaveText('Rides');
    });

    test('WhenButtonParcels_OrRides_Click_StylesAreCorrect', async () => {
        // 1
        await expect(parcelsButton).toHaveCSS('background-color', colors.white);
        await expect(ridesButton).toHaveCSS('background-color', colors.secondary);

        // 2
        await ridesButton.click();
        await expect(ridesButton).toHaveCSS('background-color', colors.white);
        await expect(parcelsButton).toHaveCSS('background-color', colors.secondary);

        // 3
        await ridesButton.click();
        await parcelsButton.click();

        await expect(parcelsButton).toHaveCSS('background-color', colors.white);
        await expect(ridesButton).toHaveCSS('background-color', colors.secondary);
    });
});
