// @ts-expect-error '@types/blob-polyfill' is not in this registry.
import { File } from 'blob-polyfill';

import { test, expect } from '@playwright/test';
import { validateUploadFile } from '@/utils/validateUploadFile';

test.describe('validateUploadFile Function', () => {
    const extensions = ['jpg', 'jpeg', 'png', 'webp'];

    test('WhenCorrectExtensions_AndValidSize_ReturnTrue', () => {
        for (const ext of extensions) {
            const file = new File(['test'], `image.${ext}`, {
                type: `image/${ext}`,
                size: 2 * 1024 * 1024,
            });
            const isValid = validateUploadFile(file);
            expect(isValid).toBe(true);
        }
    });
});
