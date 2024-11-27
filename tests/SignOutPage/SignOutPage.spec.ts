import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Sign out page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/profile/signout', { waitUntil: 'commit' });
    });

    test('WhenSignOutPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/signout`);

        const iconSignOut = page.getByTestId('iconSignOut');
        await expect(iconSignOut).toBeVisible();

        const title = page.getByText('Are you sure you want to sign out?');
        await expect(title).toBeVisible();

        const btnCancel = page.getByTestId('btnCancel');
        await expect(btnCancel).toBeVisible();
        await expect(btnCancel).toHaveText('Cancel');

        const btnYes = page.getByTestId('btnYes');
        await expect(btnYes).toBeVisible();
        await expect(btnYes).toHaveText('Yes');
    });

    test('WhenClickCancelBtn_RedirectToProfilePage', async ({ page }) => {
        await page.getByTestId('btnCancel').click();
        await page.waitForURL(`${BASE_URL_FRONT}profile`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile`);
    });

    test('WhenClickYesBtn_RedirectToSignInPage', async ({ page }) => {
        await page.getByTestId('btnYes').click();
        await page.waitForURL(`${BASE_URL_FRONT}signin`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}signin`);
    });
});
