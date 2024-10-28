import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Profile edit email page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByTestId('headerAvatar').click();
        await page.getByRole('link', { name: 'Edit email' }).click();
    });

    test('WhenProfileEditEmailPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({
        page,
    }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/email`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const profileTitleComponent = page.getByText('Edit email');
        await expect(profileTitleComponent).toBeVisible();

        const profileEditFormComponent = page.getByTestId('userCredentialsForm');
        await expect(profileEditFormComponent).toBeVisible();

        const btnSignOutComponent = page.getByRole('button', { name: 'Save changes' });
        await expect(btnSignOutComponent).toBeVisible();
    });

    test('WhenEyeButtonClick_PasswordIsVisible', async ({ page }) => {
        const input = page.getByLabel('Password');
        const eyeButton = page.getByRole('list').getByRole('button');
        await eyeButton.click();
        await expect(input).toHaveAttribute('type', 'text');

        await eyeButton.click();
        await expect(input).toHaveAttribute('type', 'password');
    });
});
