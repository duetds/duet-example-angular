import { test, expect } from '@playwright/test';

 test.use({
      viewport: { width: 1800, height: 2500 },
      bypassCSP: true,
      deviceScaleFactor: 1,
    })


test('angular 13.2.4 test', async ({ page }, testInfo) => {
  await page.waitForLoadState("networkidle") // This resolves after 'networkidle'
  await page.waitForTimeout(1000 * testInfo.retry + 1)
  await page.setViewportSize({ width: 1600, height: 1200 })


  // initial loading
  await page.goto("http://localhost:4200/");
  await page.goto("http://localhost:4200/#/");
  await page.locator('select');
  expect(await page.screenshot()).toMatchSnapshot("angular_13.2.4_1.png");


  // Select 2
  await page.locator('select').selectOption('2');
  await page.waitForLoadState("networkidle")
  expect(await page.screenshot()).toMatchSnapshot("angular_13.2.4_2.png");



  // Click input[type="number"]
  await page.locator('input[type="number"]').click();
  await page.locator('input[type="number"]').fill('500');
  await page.locator('#step1').click();
  await page.waitForLoadState("networkidle")
  expect(await page.screenshot()).toMatchSnapshot("angular_13.2.4_3.png");


  // summary loading
  await page.locator('#step2').click();
  await page.waitForLoadState("networkidle")
  expect(await page.screenshot()).toMatchSnapshot("angular_13.2.4_4.png");


  // summary displaying
  await page.locator('#step3').click();
  await page.waitForLoadState("networkidle") // This resolves after 'networkidle'
  expect(await page.screenshot()).toMatchSnapshot("angular_13.2.4_5.png");



  // Click code, store json
  await page.locator('code').click();
  expect(await page.textContent('code')).toMatchSnapshot('code.json');

});