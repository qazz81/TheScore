import Page from './page.js';

/**
* Introducing theScore Messaging page
*/

export default class IntroducingTheScoreMessagingPage extends Page {
    /**
     * define selectors using getter methods
     */
	
	get introducingTheScoreMessagingText () {
        return $('#title_onboarding');
    }
	
	get emailSignUpBtn () {
        return $('#btn_primary');
    }
	
	get maybeLaterBtn () {
        return $('#btn_secondary');
    }
	
	async tapOnEmailSignUpBtn(){
        return this.emailSignUpBtn.click();
    }
	
	async tapOnMaybeLaterBtn(){
        return this.maybeLaterBtn.click();
    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.introducingTheScoreMessagingText.waitForDisplayed({
            reverse: !isShown,
        });
    }

}
