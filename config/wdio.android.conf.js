import path from 'path';
import {config as baseConfig} from './wdio.shared.conf.js';
const androidPath = path.join(process.cwd(), '.\\app\\theScore_24_9_0.apk');

export const config = {
    ...baseConfig,
    port : 4723,
    specs : [
            '../test/specs/**/*.js'
        ],
    services : ['appium'],
    capabilities : [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: "Android",

        // 'appium:deviceName': 'nightwatch-android-11',
        // 'appium:udid': 'emulator-5554',
        // 'appium:platformVersion': '11.0',
        
        // 'appium:deviceName': 'Motorola',
        // 'appium:udid': 'ZY22GXJ8T7',
        // 'appium:platformVersion': '12.0',
        
        // "appium:deviceName": "Galaxy A54 5G",
        // "appium:platformVersion": "14",
        // "appium:deviceID": "RZCWB036QJD",

        "appium:deviceName": "Xiaomi 9 pro",
        "appium:platformVersion": "12",
        "appium:deviceID": "159efabc",
        
        "appium:automationName": "UiAutomator2",
        "appium:appWaitActivity": "ui.MainActivity",
        "appium:app": androidPath,
        // "appium:fullReset": true,
        // "appium:noReset": false,
    }]
}
