This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install the node_modules and pods

To install packages, run the following command from the _root_ of project:

```bash
# using npm
npm install

# OR using Yarn
yarn

#install pods
npx pod-install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Run e2e test cases

we are using jest with detox for e2e testing

1. make a build first to run the test cases.

### For Android Build

```bash
# using npm
npm run androidDebugBuild
npm run androidReleaseBuild

# OR using Yarn
yarn androidDebugBuild
yarn androidReleaseBuild
```

### For iOS build

```bash
# using npm
npm run iosDebugBuild
npm run iosReleaseBuild

# OR using Yarn
yarn iosDebugBuild
yarn iosReleaseBuild
```

### For Android Test

```bash
# using npm
npm run androidDebugTest
npm run androidReleaseTest

# OR using Yarn
yarn androidDebugTest
yarn androidReleaseTest
```

### For iOS Test

```bash
# using npm
npm run iosDebugTest
npm run iosReleaseTest

# OR using Yarn
yarn iosDebugTest
yarn iosReleaseTest
```

for other options, you can check the scripts in the package.json

## Congratulations! :tada:

You've successfully run your Chime App. :partying_face:
