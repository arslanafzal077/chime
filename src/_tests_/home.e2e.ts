import {device} from 'detox';

describe('HomeScreen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render home screen', async () => {
    await expect(element(by.text('Success!'))).toBeVisible();
  });
});
