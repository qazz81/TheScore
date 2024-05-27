import Page from './page.js';

/**
* General Pop up page
*/

export default class popUpPage extends Page {
    /**
     * define selectors using getter methods
     */
	 
	// Tailored Content location app
	get titleTailoredContentLocationText () {
        return $('#location_title');
    }
	
    get allowBtn () {
        return $('#btn_allow');
    }
	
	get declineBtn () {
        return $('#btn_disallow');
    }
	
	async tapOnAllowTailoredContentLocationBtn(){
        return this.allowBtn.click();
    }
	
	async tapOnDeclineTailoredContentLocationBtn(){
        return this.declineBtn.click();
    }
	
	//Permission location System
	get titlePermissionLocationPopupText () {
        return $('#permission_message');
    }
	
	get whileUsingTheAppBtn () {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
    }
	
	get permissionLocationAllowOneTimeBtn () {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_one_time_button"]');
    }
	
	get permissionLocationDenyBtn () {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
    }
	
	async tapOnWhileUsingTheAppBtn(){
        return this.whileUsingTheAppBtn.click();
    }
	
	async tapOnPermissionLocationDenyBtn(){
        return this.permissionLocationDenyBtn.click();
    }
	
	// TheScore BET advert pop up
	get titleTheScoreBetText () {
        return $('#sportsbook_logo');
    }
	
	get positiveBtn () {
        return $('#button_positive');
    }
	
	get closeBtn () {
        return $('#dismiss_modal');
    }
	
	async tapOnDownloadNowBtn(){
        return this.positiveBtn.click();
    }
	
	async tapOnCloseBtn(){
        return this.closeBtn.click();
    }
	
	 /**
     * Wait for the Pop up to be visible
     *
     * @param {text} namePopUp - expected popup name: TailoredContentLocation, PermissionLocation or titleTheScoreBetText
     * @param {boolean} isShown - default true
     */
     async waitForIsShown(namePopUp, isShown = true) {
        switch (namePopUp) {
            case TailoredContentLocation :
                return this.titleTailoredContentLocationText.waitForDisplayed({
                    reverse: !isShown,
                });
            case PermissionLocation :
                return this.titlePermissionLocationPopupText.waitForDisplayed({
                    reverse: !isShown,
                });
            case TheScoreBet :
                return this.titleTheScoreBetText.waitForDisplayed({
                    reverse: !isShown,
                });
        }
    }
}
