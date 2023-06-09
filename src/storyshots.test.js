import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getScreenshotOptions = () => {
  return {
    delay: 3000, // delay in milliseconds
  };
};

initStoryshots({
  suite: 'Image storyshots', 
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6008',
    getScreenshotOptions,
  }),
});