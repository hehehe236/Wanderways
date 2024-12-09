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

        const btnCancel = page.getByRole('button', { name: 'Cancel' });
        await expect(btnCancel).toBeVisible();

        const btnYes = page.getByRole('button', { name: 'Yes' });
        await expect(btnYes).toBeVisible();
    });

    test('WhenClickCancelBtn_RedirectToProfilePage', async ({ page }) => {
        const btnCancel = page.getByRole('button', { name: 'Cancel' });
        await btnCancel.click();
        await page.waitForURL(`${BASE_URL_FRONT}profile`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile`);
    });

    test('WhenClickYesBtn_RedirectToSignInPage', async ({ page }) => {
        const btnYes = page.getByRole('button', { name: 'Yes' });
        await btnYes.click();
        await page.waitForURL(`${BASE_URL_FRONT}signin`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}signin`);
    });
});
