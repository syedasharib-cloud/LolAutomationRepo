import { test, expect } from '@playwright/test';

test('basic page load', async({ page }) => {

await page.goto('https://www.lol.land/login');
await expect(page).toHaveTitle("LOL Land");


})