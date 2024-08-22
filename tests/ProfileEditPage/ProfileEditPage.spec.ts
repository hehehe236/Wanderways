import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Profile edit page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        await page.getByTestId('headerAvatar').click();
        await page.getByRole('link', { name: 'Edit profile' }).click();
    });

    test('WhenProfileEditPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/general`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const profileTitleComponent = page.getByText('Edit Profile');
        await expect(profileTitleComponent).toBeVisible();

        const profileEditFormComponent = page.getByTestId('profileEditForm');
        await expect(profileEditFormComponent).toBeVisible();

        const btnSignOutComponent = page.getByRole('button', { name: 'Save changes' });
        await expect(btnSignOutComponent).toBeVisible();
    });
});
