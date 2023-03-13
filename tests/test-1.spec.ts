import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-api-testing');
  await page.getByRole('navigation', { name: 'Breadcrumbs' }).getByText('Playwright Test').click();
  await page.getByRole('navigation', { name: 'Breadcrumbs' }).getByText('Playwright Test').click();
  await page.getByRole('link', { name: 'Release notes' }).click();
  await page.locator('#new-apis').getByRole('link', { name: 'Direct link to New APIs' }).click();
  await page.locator('#new-apis').getByRole('link', { name: 'Direct link to New APIs' }).click();
});