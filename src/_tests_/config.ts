export const testConfig = {
  credentials: {
    firstName: 'Shaheer',
    lastName: 'Arshad',
    email: 'test@email.com',
    password: 'test1234',
  },
  wrongEmails: [
    '123',
    'wrong',
    'wrong@',
    'wrong@wrong.',
    'wrong@wrong.',
    'wrong wrong@gmail.com',
    'wrong@@gmail.com',
    'wrong$%^@gmail.com',
  ],
};

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
