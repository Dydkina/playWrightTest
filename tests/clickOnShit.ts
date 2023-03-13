import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://dreamniker.io/');
  await page.getByText('C', { exact: true }).first().click();
  await page.getByText('D', { exact: true }).first().click();
  await page.getByText('E', { exact: true }).first().click();
  await page.getByText('F', { exact: true }).first().click({ timeout: 630000 });
  await page.getByText('G', { exact: true }).first().click();

});