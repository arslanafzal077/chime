import {device} from 'detox';
import {sleep, testConfig} from './config';

let {credentials, wrongEmails} = testConfig;

export const LoginScreen = () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: false,
    });
  });

  it('Empty Inputs Functionality', async () => {
    await device.launchApp({
      newInstance: true,
    });
    await waitFor(element(by.id('login-screen'))).toBeVisible();

    // email empty
    await element(by.id('email-input')).typeText('');
    await element(by.id('email-input')).tapReturnKey();
    await waitFor(element(by.id('email-input-error')))
      .toHaveText('Email Address is Required')
      .withTimeout(2000);

    // password empty
    await element(by.id('password-input')).typeText('');
    await element(by.id('password-input')).tapReturnKey();
    await waitFor(element(by.id('password-input-error'))).toHaveText(
      'Password is required',
    );
  });

  it('Toggle Password Functionality', async () => {
    await waitFor(element(by.id('login-screen'))).toBeVisible();
    await element(by.id('password-input')).replaceText(credentials.password);
    await element(by.id('togglePassVisibility')).tap();
    await waitFor(element(by.id('loginPassword'))).toHaveText(
      credentials.password,
    );
    await element(by.id('togglePassVisibility')).tap();
    await waitFor(element(by.id('loginPassword'))).not.toHaveText(
      credentials.password,
    );
  });

  it('Valid Functionality', async () => {
    await element(by.id('password-input')).replaceText(credentials.password);
    for (let index = 0; index < wrongEmails.length; index++) {
      const email = wrongEmails[index];
      await element(by.id('email-input')).replaceText(email);
      await element(by.id('email-input')).tapReturnKey();
      await waitFor(element(by.id('email-input-error'))).toHaveText(
        'Please enter a valid email address',
      );
    }
  });

  it(`Error Modal Functionality`, async () => {
    await element(by.id('email-input')).replaceText('email@email.com');
    await element(by.id('password-input')).replaceText('password1234');
    await element(by.id('password-input')).tapReturnKey();
    await element(by.id('login-button')).tap();
    await sleep(2000);
    await waitFor(element(by.id('error-modal')).toBeVisible());
    await element(by.id('try-again')).tap();
  });

  it(`Login with ${credentials.email}`, async () => {
    await element(by.id('email-input')).replaceText(credentials.email);
    await element(by.id('password-input')).replaceText(credentials.password);
    await element(by.id('password-input')).tapReturnKey();
    await element(by.id('login-button')).tap();
  });
};
