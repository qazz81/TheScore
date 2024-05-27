import Page from './page.js';

/**
* Get Started object containing all methods, selectors and functionality
*/
export default class WelcomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeScreen () {
        return $('#fullscreen_splash_ad');
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.welcomeScreen.waitForDisplayed({
            reverse: !isShown,
        });
    }
	
}
