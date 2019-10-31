import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
const appReq = require.context('../projects', true, /\.stories\.ts$/);
const appReq = require.context('../libs', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  appReq.keys().forEach(filename => appReq(filename));
}

configure(loadStories, module);
