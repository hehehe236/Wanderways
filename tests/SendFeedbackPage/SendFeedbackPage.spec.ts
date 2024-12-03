import { expect, test } from '@playwright/test';
import { BASE_URL_FRONT } from '@/utils/const.ts';

const FEEDBACK = 'Thank you for your feedback!';

test.describe('Send feedback page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/confirm-delivery/feedback', { waitUntil: 'commit' });
    });

    test('WhenSendFeedbackPageLoaded_URLIsCorrect_AndComponentsAreVisible', async ({ page }) => {
        expect(page.url()).toBe(`${BASE_URL_FRONT}confirm-delivery/feedback`);

        const arrowBack = page.getByRole('button', { name: 'Back' });
        await expect(arrowBack).toBeVisible();

        const iconTitleBlock = page.getByTestId('iconTitleBlock');
        await expect(iconTitleBlock).toBeVisible();

        const sendFeedbackForm = page.getByTestId('sendFeedbackForm');
        await expect(sendFeedbackForm).toBeVisible();
    });

    test('WhenClickSubmitBtn_AndFillForm_RedirectToFeedbackConfirmationPage', async ({ page }) => {
        const textFeedback = page.locator('#feedback');
        await textFeedback.fill(FEEDBACK);
        const submitBtn = page.getByRole('button', { name: 'Submit' });
        await submitBtn.click();
        await page.waitForURL(`${BASE_URL_FRONT}confirm-delivery/feedback-confirmation`);
        expect(page.url()).toBe(`${BASE_URL_FRONT}confirm-delivery/feedback-confirmation`);
    });
});
