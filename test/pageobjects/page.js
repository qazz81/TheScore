import { $ } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    
    get navigateUpBtn () {
        return $('~Navigate up');
    }
	
	get alertIconBtn () {
        return $('(//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/action_alert"])[1]');
    }
	
	get faworiteIconBtn () {
        return $('(//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/action_alert"])[2]');
    }

    get continueBtn () {
        return $('#btn_primary');
    }

    async tapBackBtn(){
        return this.navigateUpBtn.click();
    }

    async tapAlertIconBtn(){
        return this.alertIconBtn.click();
    }

    async tapFavoriteIconBtn(){
        return this.faworiteIconBtn.click();
    }
	
}
