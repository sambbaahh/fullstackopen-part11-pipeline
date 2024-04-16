import { test, expect } from "@playwright/test";

test.describe("Simple tests", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Anecdotes")).toBeVisible();
    await expect(page.getByText("filter")).toBeVisible();
  });

  test("anecdote can be added", async ({ page }) => {
    await page.goto("/");

    await page.locator("[name='content']").fill("Testing with PlayWright");
    await page.getByRole("button", { name: "create" }).click();
    await page.locator("[name='content']").fill("");
    
    await expect(page.getByText('Testing with PlayWright', { exact: true })).toBeVisible();
  });
});
