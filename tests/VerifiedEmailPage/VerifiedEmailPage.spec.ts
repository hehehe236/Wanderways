import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Verified email page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/signup/verified-email', { waitUntil: 'commit' });
    });

    test('WhenVerifiedEmailPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}signup/verified-email`);

        const iconCheckmark = page.getByTestId('iconCheckmark');
        await expect(iconCheckmark).toBeVisible();

        const title = page.getByText('Email verified');
        await expect(title).toBeVisible();

        const btnContinue = page.getByTestId('btnContinue');
        await expect(btnContinue).toBeVisible();
        await expect(btnContinue).toHaveText('Continue');
    });
});
