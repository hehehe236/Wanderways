import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('SignIn page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/signin', { waitUntil: 'commit' });
    });

    test('WhenSignInPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}signin`);

        const logo = page.getByTestId('logo');
        await expect(logo).toBeVisible();

        const title = page.getByText('Sign In to your account');
        await expect(title).toBeVisible();

        const userCredentialsForm = page.getByTestId('userCredentialsForm');
        await expect(userCredentialsForm).toBeVisible();

        const socialAuthIcons = page.getByTestId('socialAuthIcons');
        await expect(socialAuthIcons).toBeVisible();
        const items = await socialAuthIcons.locator('li').count();
        expect(items).toBe(3);

        const text = page.getByText('Don’t have an account?');
        await expect(text).toBeVisible();

        const linkRedirect = page.getByTestId('linkRedirect');
        await expect(linkRedirect).toBeVisible();
        await expect(linkRedirect).toContainText('Sign up');
    });
});
