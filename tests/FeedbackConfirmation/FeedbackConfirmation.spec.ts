import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Feedback confirmation page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/confirm-delivery/feedback-confirmation', { waitUntil: 'commit' });
    });

    test('WhenFeedbackConfirmationPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({
        page,
    }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}confirm-delivery/feedback-confirmation`);

        const iconTitleBlock = page.getByTestId('iconTitleBlock');
        await expect(iconTitleBlock).toBeVisible();

        const btnSignIn = page.getByTestId('btnSignIn');
        await expect(btnSignIn).toBeVisible();

        const btnSignUp = page.getByTestId('btnSignUp');
        await expect(btnSignUp).toBeVisible();
    });

    test('WhenClickSignIn_RedirectToSignInPage', async ({ page }) => {
        const btnSignIn = page.getByTestId('btnSignIn');
        await btnSignIn.click();
        await page.waitForURL(`${BASE_URL_FRONT}signin`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}signin`);
    });

    test('WhenClickSignUp_RedirectToSignUpPage', async ({ page }) => {
        const btnSignUp = page.getByTestId('btnSignUp');
        await btnSignUp.click();
        await page.waitForURL(`${BASE_URL_FRONT}signup`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}signup`);
    });
});
