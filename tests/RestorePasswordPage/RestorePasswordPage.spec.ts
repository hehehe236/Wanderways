import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Restore password page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/signin/restore-password', { waitUntil: 'commit' });
    });

    test('WhenRestorePasswordPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}signin/restore-password`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const iconTitleBlock = page.getByTestId('iconTitleBlock');
        await expect(iconTitleBlock).toBeVisible();

        const subtitle = page.getByTestId('subtitle');
        await expect(subtitle).toBeVisible();
        await expect(subtitle).toHaveText(
            'Enter an email associated with your account to get a link to reset your password'
        );

        const sendEmailForm = page.getByTestId('sendEmailForm');
        await expect(sendEmailForm).toBeVisible();

        const additionalText = page.getByTestId('additionalText');
        await expect(additionalText).toBeVisible();
    });
});
