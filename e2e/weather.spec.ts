import { test, expect } from "@playwright/test";

test("should show the name of cities properly", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Joinville")).toBeVisible();
  await expect(page.getByText("San Francisco")).toBeVisible();
  await expect(page.getByText("Urubici")).toBeVisible();
});

test("temperature should be displayed in celsius degree", async ({ page }) => {
    await page.goto("/");
    const firstTemp = await page.getByTestId('temp1').textContent();
    const secondTemp = await page.getByTestId('temp2').textContent();
    const thirdTemp = await page.getByTestId('temp3').textContent();

    const firstTempArr = firstTemp?.split('');
    const secondTempArr = secondTemp?.split('');
    const thirdTempArr = thirdTemp?.split('');

    await expect(firstTempArr?.slice(firstTempArr.length - 2).join('')).toBe('°C');
    await expect(secondTempArr?.slice(secondTempArr.length - 2).join('')).toBe('°C');
    await expect(thirdTempArr?.slice(thirdTempArr.length - 2).join('')).toBe('°C');
  });
