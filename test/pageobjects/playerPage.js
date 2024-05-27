import Page from './page.js';

/**
 * Player page containing specific selectors and methods
 */
export default class PlayerPage extends Page {
    /**
     * define selectors using getter methods
     */
	
	get playerImageIcon () {
        return $('#player_headshot_image_view');
    }
	
	get playerNameText () {
        return $('#txt_player_name');
    }
	
	get playerTeamText () {
        return $('#detail_subtitle');
    }
	
	get newsBtn () {
        return $('//android.widget.TextView[@text="NEWS"]');
    }
	
	get seasonBtn () {
        return $('//android.widget.TextView[@text="SEASON"]');
    }
	
	async tapBackBtn(){
        return this.navigateUpBtn.click();
    }
	
	async tapAlertIconBtn(){
        return this.alertIconBtn.click();
    }
	
	async tapFaworiteIconBtn(){
        return this.newsBtn.click();
    }
	
	async tapNseasonBtn(){
        return this.seasonBtn.click();
    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.playerImageIcon.waitForDisplayed({
            reverse: !isShown,
        });
    }
		
}
