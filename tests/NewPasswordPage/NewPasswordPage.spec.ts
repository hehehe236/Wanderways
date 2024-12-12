import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('New password page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/signin/new-password', { waitUntil: 'commit' });
    });

    test('WhenNewPasswordPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}signin/new-password`);

        const title = page.getByTestId('title');
        await expect(title).toBeVisible();
        await expect(title).toHaveText('Set new password');

        const newPasswordForm = page.getByTestId('newPasswordForm');
        await expect(newPasswordForm).toBeVisible();
    });
});
