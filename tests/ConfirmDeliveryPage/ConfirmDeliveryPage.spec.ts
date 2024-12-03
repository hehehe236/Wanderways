import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

test.describe('Confirm delivery page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/confirm-delivery', { waitUntil: 'commit' });
    });

    test('WhenConfirmDeliveryPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}confirm-delivery`);

        const iconTitleBlock = page.getByTestId('iconTitleBlock');
        await expect(iconTitleBlock).toBeVisible();

        const iconParcelTypeBlock = page.getByTestId('iconParcelTypeBlock');
        await expect(iconParcelTypeBlock).toBeVisible();

        const iconDriverBlock = page.getByTestId('iconDriverBlock');
        await expect(iconDriverBlock).toBeVisible();

        const btnDeliveryFailed = page.getByTestId('btnCancel');
        await expect(btnDeliveryFailed).toBeVisible();

        const btnConfirmFailed = page.getByTestId('btnYes');
        await expect(btnConfirmFailed).toBeVisible();
    });

    test('WhenClickDeliveryFailedBtn_RedirectToFeedbackPage', async ({ page }) => {
        const btnDeliveryFailed = page.getByTestId('btnCancel');
        await btnDeliveryFailed.click();
        await page.waitForURL(`${BASE_URL_FRONT}confirm-delivery/feedback`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}confirm-delivery/feedback`);
    });

    test('WhenClickConfirmFailedBtn_RedirectToFeedbackPage', async ({ page }) => {
        const btnConfirmFailed = page.getByTestId('btnYes');
        await btnConfirmFailed.click();
        await page.waitForURL(`${BASE_URL_FRONT}confirm-delivery/feedback`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}confirm-delivery/feedback`);
    });
});
