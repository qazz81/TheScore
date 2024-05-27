import Page from './page.js';

/**
* Get Started  page
*/

export default class GetStartedPage extends Page {
    /**
     * define selectors using getter methods
     */
    get startedBtn () {
        return $('#btn_primary');
    }
	
	get logInBtn () {
        return $('#txt_sign_in');
    }
	
	get welcomeText () {
        return $('#txt_welcome');
    }
	
	get welcomeIcon () {
        return $('#icon_welcome');
    }
	
	async tapOnGetStartedBtn(){
        return this.startedBtn.click();
    }
	
	async tapOnLogInBtn(){
        return this.logInBtn.click();
    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.startedBtn.waitForDisplayed({
            reverse: !isShown,
        });
    }
}

