describe('Default test of the app running', () => {
  test('Should do one thing', () => {
    // do something...
  });

  test('Should do another thing', () => {
    // do something...
  });
});


describe('App render correctly in browser', () => {
  test('Page should match snapshot', async () => {
      const page = await browser.newPage();
      await page.goto('https://0.0.0.0:4200');
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot();
  });

});