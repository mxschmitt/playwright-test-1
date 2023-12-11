import { Locator } from '@playwright/test';
/**
 * Validate the title of the element
 *
 * @param {Locator} locator of the element
 * @param {string} value of the title
 */
export declare function titleVerify(locator: Locator, value: string): Promise<void>;
