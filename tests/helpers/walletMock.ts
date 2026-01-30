import { Page } from '@playwright/test';

export async function enableWalletMock(page: Page) {
  await page.addInitScript(() => {
    (window as any).ethereum = {
      isMetaMask: true,
      request: async ({ method }: { method: string }) => {
        if (method === 'eth_requestAccounts') return ['0xFAKE_WALLET_123'];
        if (method === 'personal_sign') return '0xFAKE_SIGNATURE';
        return [];
      },
      on: () => {}
    };
  });
}