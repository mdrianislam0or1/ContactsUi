# Login Screen UI - React Native Frontend

This is a **React Native CLI** project that demonstrates a **Login Screen** UI with email and password inputs, a password visibility toggle, and social login buttons.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- Email input field.
- Password input field with eye icon to toggle visibility.
- Responsive UI design with support for Android and iOS.
- Google and Facebook login buttons.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your system. [Download here](https://nodejs.org).
- **React Native CLI**: You'll need the React Native CLI for running the project. Follow the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) for installing the CLI.
- **Android Studio** or **Xcode**: Required for Android or iOS development.

## Installation

### Step 1: Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Step 2: Install Dependencies

Navigate to the project folder and run the following command to install the necessary dependencies:

bash

npm install

This command will install all the dependencies listed in the package.json file.
Running the App

Once the dependencies are installed, you can run the app on either an Android or iOS device/emulator.
For Android:

Ensure that an Android emulator or device is connected and then run:

bash

npx react-native run-android

For iOS:

Ensure that an iOS simulator or device is connected and then run:

bash

npx react-native run-ios

    Note: For iOS, you need to have Xcode installed.

Folder Structure

graphql

.
├── android/                # Native Android project files
├── ios/                    # Native iOS project files
├── assets/                 # Images and assets
│   ├── header.png          # Header image for the login screen
│   ├── eye.png             # Eye icon for password toggle
│   ├── google.png          # Google login icon
│   └── facebook.png        # Facebook login icon
├── src/                    # Source files for the app
│   └── LoginScreen.js      # Main login screen component
├── App.js                  # Entry point for the app
├── README.md               # Project documentation
├── package.json            # Project dependencies and scripts

Dependencies

This project relies on the following dependencies:

    react-native: Framework for building native apps.
    react-native-vector-icons: For adding icons (such as the eye icon in the password field).
    react-native-safe-area-context: For managing content layout within safe area boundaries.

To install these dependencies, run:

bash

npm install react-native-vector-icons react-native-safe-area-context

Linking Vector Icons

After installing react-native-vector-icons, you may need to link it:

bash

npx react-native link react-native-vector-icons

Customization

You can customize the UI by modifying the styles or replacing assets:

    Change colors and fonts in LoginScreen.js under the styles object.
    Replace images in the assets/ folder (such as header.png, eye.png, etc.).

Screenshots

Here’s what the login screen looks like:

License

This project is licensed under the MIT License. You can use, modify, and distribute the code in any way.