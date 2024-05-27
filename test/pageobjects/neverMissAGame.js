import Page from './page.js';

/**
 * Never Miss a Game Page containing specific selectors and methods
 */
export default class NeverMissAGamePage extends Page {
    /**
     * define selectors using getter methods
     */

	async tapOnContinueBtn(){
        return this.continueBtn.click();
    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.continueBtn.waitForDisplayed({
            reverse: !isShown,
        });
    }
	
}
