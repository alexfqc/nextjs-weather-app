import { test, expect } from "@playwright/test";
import getClassColor from '@/app/_utils/getClassColor'

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

    expect(firstTempArr?.slice(firstTempArr.length - 2).join('')).toBe('°C');
    expect(secondTempArr?.slice(secondTempArr.length - 2).join('')).toBe('°C');
    expect(thirdTempArr?.slice(thirdTempArr.length - 2).join('')).toBe('°C');
});

test("temperature should have the proper class", async ({ page }) => {
    await page.goto("/");
    const firstTemp = await page.getByTestId('temp1').textContent();
    const secondTemp = await page.getByTestId('temp2').textContent();
    const thirdTemp = await page.getByTestId('temp3').textContent();

    const firstTempClass = await page.getByTestId('temp1').getAttribute('class');
    const secondTempClass = await page.getByTestId('temp2').getAttribute('class');
    const thirdTempClass = await page.getByTestId('temp3').getAttribute('class');

    const firstTempArr = firstTemp?.split('');
    const secondTempArr = secondTemp?.split('');
    const thirdTempArr = thirdTemp?.split('');

    const firstTempValue = parseInt(firstTempArr?.slice(0, firstTempArr.length - 2).join('') ?? '', 10);
    const secondTempValue = parseInt(secondTempArr?.slice(0, secondTempArr.length - 2).join('') ?? '', 10);
    const thirdTempValue = parseInt(thirdTempArr?.slice(0, thirdTempArr.length - 2).join('') ?? '', 10);    

    expect(firstTempClass?.includes(getClassColor(firstTempValue))).toBeTruthy();
    expect(secondTempClass?.includes(getClassColor(secondTempValue))).toBeTruthy();
    expect(thirdTempClass?.includes(getClassColor(thirdTempValue))).toBeTruthy();
});

test("humidity should be displayed in porcentage", async ({ page }) => {
    await page.goto("/");
    const firstTemp = await page.getByTestId('humidity1').textContent();
    const secondTemp = await page.getByTestId('humidity2').textContent();
    const thirdTemp = await page.getByTestId('humidity3').textContent();

    const firstTempArr = firstTemp?.split('');
    const secondTempArr = secondTemp?.split('');
    const thirdTempArr = thirdTemp?.split('');

    expect(firstTempArr?.slice(firstTempArr.length - 1).join('')).toBe('%');
    expect(secondTempArr?.slice(secondTempArr.length - 1).join('')).toBe('%');
    expect(thirdTempArr?.slice(thirdTempArr.length - 1).join('')).toBe('%');
});
