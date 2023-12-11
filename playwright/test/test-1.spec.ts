import { expect, test } from "@playwright/test";
import { titleVerify } from "helper";

test("test-1@", async ({ page }) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    await page.goto("https://playwright.dev/");
    await delay(3000);

    await test.step(`Step #1: Validate Playwright Header`, async () => {
        await expect(
            page.locator("header h1"),
            "Playwright header is not visible"
        ).toBeVisible();
    });

    await test.step(`Step #1: Validate Playwright Highlighted Title`, async () => {
        await titleVerify(page.locator("header h1 span"), "Playwright");
    });
});
