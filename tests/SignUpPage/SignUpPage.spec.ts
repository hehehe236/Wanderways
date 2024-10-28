import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('SignUp page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/signup', { waitUntil: 'commit' });
    });

    test('WhenSignUpPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}signup`);

        const logo = page.getByTestId('logo');
        await expect(logo).toBeVisible();

        const title = page.getByText('Create an account');
        await expect(title).toBeVisible();

        const userCredentialsForm = page.getByTestId('userCredentialsForm');
        await expect(userCredentialsForm).toBeVisible();

        const textConditions = page.getByText('By signing up you agree with out');
        await expect(textConditions).toBeVisible();

        const linkConditions = page.getByText('Terms & Conditions');
        await expect(linkConditions).toBeVisible();

        const socialAuthIcons = page.getByTestId('socialAuthIcons');
        await expect(socialAuthIcons).toBeVisible();
        const items = await socialAuthIcons.locator('li').count();
        expect(items).toBe(3);

        const text = page.getByText('Already have an account?');
        await expect(text).toBeVisible();

        const linkRedirect = page.getByTestId('linkRedirect');
        await expect(linkRedirect).toBeVisible();
        await expect(linkRedirect).toContainText('Sign In');
    });
});
