import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import puppeteer from 'puppeteer';

const beforeScreenshot = async (page) => {
  // Unregister all service workers before taking a snapshot
  await page.evaluate(() => {
    return navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        for(let registration of registrations) {
          registration.unregister();
        }
      });
  });

  return page;
};

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6008',
    beforeScreenshot,
    getCustomBrowser: () => puppeteer.launch({
      ignoreHTTPSErrors: true, // Ignore HTTPS errors
    }),
  }),
});
