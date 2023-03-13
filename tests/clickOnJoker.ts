import { test, expect } from '@playwright/test';

test('test33', async ({ page }) => {
  await page.goto('https://dreamniker.io/');
  await page.getByRole('button', { name: '🐞' }).click();
  await page.getByRole('button', { name: '🃏' }).click({
    clickCount: 100
  });
  await page.reload();
});