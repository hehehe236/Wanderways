import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Confirm email page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/signup/confirm-email', { waitUntil: 'commit' });
    });

    test('WhenConfirmEmailPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}signup/confirm-email`);

        const iconMailFast = page.getByTestId('iconMailFast');
        await expect(iconMailFast).toBeVisible();

        const title = page.getByText('Confirm your email', { exact: true });
        await expect(title).toBeVisible();

        const text = page.getByText(
            'A confirmation email has been sent to your email. Click on the link in the letter to confirm your email',
            { exact: true }
        );
        await expect(text).toBeVisible();

        const btnOpenEmail = page.getByTestId('btnOpenEmail');
        await expect(btnOpenEmail).toBeVisible();
        await expect(btnOpenEmail).toHaveText('Open email app');
    });
});
