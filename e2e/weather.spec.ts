import { test, expect } from "@playwright/test";

test("should show the name of cities properly", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  await expect(page.getByText("Joinville")).toBeVisible();
  await expect(page.getByText("San Francisco")).toBeVisible();
  await expect(page.getByText("Urubici")).toBeVisible();
});
