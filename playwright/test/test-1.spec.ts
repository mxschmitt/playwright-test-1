import { expect, test } from "@playwright/test";
import { titleVerify } from "helper";

test("test-1@", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await test.step(`Step #2: Validate Playwright Highlighted Title`, async () => {
        await titleVerify(page.locator("header h1 span"), "Playwright");
    });
});
