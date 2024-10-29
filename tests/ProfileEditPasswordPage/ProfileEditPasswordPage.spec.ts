import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Profile edit password page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByTestId('headerAvatar').click();
        await page.getByRole('link', { name: 'Edit password' }).click();
    });

    test('WhenProfileEditPasswordPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({
        page,
    }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/password`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const profileTitleComponent = page.getByText('Edit password');
        await expect(profileTitleComponent).toBeVisible();

        const profileEditFormComponent = page.getByTestId('passwordEditForm');
        await expect(profileEditFormComponent).toBeVisible();
        const listItems = profileEditFormComponent.locator('li');
        expect(await listItems.count()).toBe(3);

        const btnSignOutComponent = page.getByRole('button', { name: 'Save changes' });
        await expect(btnSignOutComponent).toBeVisible();
    });

    test('WhenEyeButtonClick_PasswordsAreVisible', async ({ page }) => {
        const inputs = [
            { id: 'currentPassword', placeholder: 'Current password' },
            { id: 'newPassword', placeholder: 'New password' },
            { id: 'confirmNewPassword', placeholder: 'Confirm new password' },
        ];

        for (const inputConfig of inputs) {
            const li = page.getByTestId(inputConfig.id);
            const eyeButton = li.getByRole('button');
            await eyeButton.click();

            const input = li.getByPlaceholder(inputConfig.placeholder);
            await expect(input).toHaveAttribute('type', 'text');

            await eyeButton.click();
            await expect(input).toHaveAttribute('type', 'password');
        }
    });
});
