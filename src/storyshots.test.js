import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6008',
    beforeScreenshot: async (page) => {
      await page.waitForTimeout(3000); // wait for 1 second
    },
  }),
});
