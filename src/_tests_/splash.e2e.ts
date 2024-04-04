import {device} from 'detox';

export const SplashScreen = () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: false,
    });
    describe('SplashScreen', () => {
      beforeEach(async () => {
        await device.reloadReactNative();
      });

      it('should render splash screen', async () => {
        await expect(element(by.id('splash-screen'))).toBeVisible();
      });
    });
  });
};
