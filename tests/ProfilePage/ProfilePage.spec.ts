import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Profile page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
        const element = page.getByTestId('headerAvatar');
        await element.click();
    });

    test('WhenProfilePageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const profileAvatarComponent = page.getByTestId('profileAvatar');
        await expect(profileAvatarComponent).toBeVisible();

        const profileNameComponent = page.getByTestId('profileName');
        await expect(profileNameComponent).toBeVisible();

        const profileListAttributeComponent = page.getByTestId('profileAttributes');
        await expect(profileListAttributeComponent).toBeVisible();

        const listItems = profileListAttributeComponent.locator('li');
        expect(await listItems.count()).toBe(5);

        const btnSignOutComponent = page.getByTestId('btnSignOut');
        await expect(btnSignOutComponent).toBeVisible();
    });

    test('WhenClickSinOutBtn_RedirectToSignOutPage', async ({ page }) => {
        const btnSignOutComponent = page.getByTestId('btnSignOut');
        await btnSignOutComponent.click();
        await page.waitForURL(`${BASE_URL_FRONT}profile/signout`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}profile/signout`);
    });
});
