"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleVerify = void 0;
const test_1 = require("@playwright/test");
/**
 * Validate the title of the element
 *
 * @param {Locator} locator of the element
 * @param {string} value of the title
 */
async function titleVerify(locator, value) {
    await (0, test_1.expect)(locator, `Expected title: ${value} , got ${await locator.innerText()} .`).toHaveText(value);
}
exports.titleVerify = titleVerify;
