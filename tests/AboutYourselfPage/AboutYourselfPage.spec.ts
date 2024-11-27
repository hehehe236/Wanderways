import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('About yourself page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/signup/about-yourself', { waitUntil: 'commit' });
    });

    test('WhenAboutYourselfPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}signup/about-yourself`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const profileAvatar = page.getByTestId('profileAvatar');
        await expect(profileAvatar).toBeVisible();

        const title = page.getByText('Tell us about yourself');
        await expect(title).toBeVisible();

        const userProfileForm = page.getByTestId('userProfileForm');
        await expect(userProfileForm).toBeVisible();

        const wantToBeDriver = page.getByTestId('wantToBeDriver');
        await expect(wantToBeDriver).toBeVisible();
        await wantToBeDriver.click();

        const addYourCar = page.getByTestId('addYourCar');
        await expect(addYourCar).toBeVisible();
    });
});
