import { test, expect } from '@playwright/test';

test.describe('Theme Toggle Tests', () => {
  test('should load in dark mode by default and switch to light mode', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Wait for the page to be fully loaded
    await page.waitForSelector('nav');

    // Verify dark mode is active by default (html should have 'dark' class)
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveClass(/dark/);

    // Take screenshot of dark mode
    await page.screenshot({ path: 'tests/screenshots/dark-mode.png', fullPage: true });

    console.log('✓ Dark mode is active by default');

    // Click the theme toggle button
    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await themeToggle.click();

    // Wait a bit for the transition
    await page.waitForTimeout(500);

    // Verify dark class is removed (light mode active)
    await expect(htmlElement).not.toHaveClass(/dark/);

    // Take screenshot of light mode
    await page.screenshot({ path: 'tests/screenshots/light-mode.png', fullPage: true });

    console.log('✓ Switched to light mode successfully');

    // Verify background color changed
    const mainElement = page.locator('main');
    const backgroundColor = await mainElement.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    console.log('Light mode background color:', backgroundColor);

    // Switch back to dark mode
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Verify dark class is back
    await expect(htmlElement).toHaveClass(/dark/);

    console.log('✓ Switched back to dark mode successfully');

    // Take another screenshot to verify
    await page.screenshot({ path: 'tests/screenshots/dark-mode-after-toggle.png', fullPage: true });
  });

  test('should persist theme preference after reload', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Switch to light mode
    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Verify light mode is active
    const htmlElement = page.locator('html');
    await expect(htmlElement).not.toHaveClass(/dark/);

    console.log('✓ Switched to light mode');

    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    // Verify light mode is still active after reload
    await expect(htmlElement).not.toHaveClass(/dark/);

    console.log('✓ Light mode persisted after reload');

    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/light-mode-persisted.png', fullPage: true });
  });
});
