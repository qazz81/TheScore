import Page from './page.js';

/**
 * Main page containing specific selectors and methods
 */
export default class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
	
    get userImageBtn () {
        return $('//android.widget.ImageButton');
    }

	get searchBarTextViewField () {
        return $('#search_bar_text_view');
    }
	
	get messageIcon () {
        return $('#message_icon');
    }
	
    get addButton () {
        return $('#icon');
    }
	
	get firstFavoriteIcon () {
        return $('(//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/icon_team_logo"])[1]');
    }

    get firstFavoriteIconText () {
        return $('(//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/label"])[2]');
    }
	
	get secondFavoriteIcon () {
        return $('(//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/icon_team_logo"])[2]');
    }

    get secondFavoriteIconText () {
        return $('(//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/label"])[3]');
    }
	
	get thirdFavoriteIcon () {
        return $('(//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/icon_team_logo"])[3]');
    }

    get thirdFavoriteIconText () {
        return $('(//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/label"])[4]');
    }
	
	get fourthFavoriteIcon () {
        return $('(//android.widget.ImageView[@resource-id="com.fivemobile.thescore:id/icon_team_logo"])[4]');
    }

    get fourthFavoriteIconText () {
        return $('(//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/label"])[5]');
    }

    async tapOnFirstFavoriteIcon(){
        return this.firstFavoriteIcon.click();
    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.userImageBtn.waitForDisplayed({
            reverse: !isShown,
        });
    }
}

