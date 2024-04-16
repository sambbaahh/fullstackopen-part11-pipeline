import { test, describe, expect } from "@playwright/test";

describe("Simple tests", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Anecdotes")).toBeVisible();
    await expect(page.getByText("filter")).toBeVisible();
  });

  test("anecdote can be added", async ({ page }) => {
    await page.goto("/");

    await page.locator("[name='content']").fill("Testing with PlayWright");
    await page.getByText("click").click();
    await page.locator("[name='content']").fill("");

    await expect(page.getByText("Testing with PlayWright")).toBeVisible();
  });
});
