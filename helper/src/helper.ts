import { expect, Locator } from '@playwright/test';

/**
 * Validate the title of the element
 *
 * @param {Locator} locator of the element
 * @param {string} value of the title
 */
export async function titleVerify(locator: Locator, value: string): Promise<void> {
  await expect(locator, `Expected title: ${value} , got ${await locator.innerText()} .`).toHaveText(
    value
  );
}