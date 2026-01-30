import { test, expect } from '@playwright/test';
import { enableWalletMock } from '../helpers/walletMock';

test('connect wallet and see login', async ({ page }) => {
  await enableWalletMock(page);

  await page.goto('https://lol.land');
  await page.getByText('Connect Wallet').click();

  // After mock, check dashboard / welcome message appears
  await expect(page.getByText(/welcome/i)).toBeVisible();
});