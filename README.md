# theScore Project

## Description
This project is based on the WebdriverIO test framework with Appium. The Page Object and Factory patterns were used to describe pages, creating more reusable and maintainable code. This framework can be run on Desktop WEB, Android and iOS WEB, and Android and iOS mobile applications.

At the moment, tests were performed only on the Android platform. Other platforms require additional configuration with changing Appium capabilities and locators in PO.

Allure, JUnit and Spec Report reporting modules are integrated.

## Project Structure

- **Config folder**: Contains files with different configurations for running on different platforms
- **Allure-report** and **allure-results**: For Allure reports
- **jUnitReport**: Jenkins compatible XML-based JUnit reports
- **test folder**: Contains test-related files
  - **data**: Collected data for parameterizing tests
  - **helpers**: Helper methods for reusing in tests
  - **pageObjects**: Collected files with Page Objects of the application
  - **specs**: Folder for test scripts
    - **test.e2e.js**: Test cases with required steps from the requirements. This is a parameterized test case with a data file placed in the data folder.
- **RunAndroidAPPKillNodeGenerateReport.cmd**: File for running tests on the Android app and preparing a report for Allure (folder: allure-report). To observe the report, install Allure (https://allurereport.org/docs/install/) and start it (from bash: `allure open`) and JUnit.

## Based On
This project is currently based on:
- **WebdriverIO**: 8.x
- **Appium**: 2.x

## Installation

1. Clone this project by running:
    ```sh
    git clone https://github.com/qazz81/TheScore.git
    ```

2. Install all dependencies:
    ```sh
    npm install
    ```

**Tip:** Use the appium-installer package to set up Appium on your local machine. This will also help you configure Android Emulators/iOS Simulators.

## Native App Tests

All tests can be executed on the devices as configured in `wdio.android.app.conf.ts` or `wdio.ios.app.conf.ts`. Please check the below tests on what they do or how to run them separately.

### For Android local execution
Run:
```sh
RunAndroidAPPKillNodeGenerateReport.cmd
```
### For iOS local execution
Modify RunAndroidAPPKillNodeGenerateReport.cmd to run on the iOS platform.
