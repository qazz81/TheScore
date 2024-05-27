import Page from './page.js';

/**
* Choose Your Favorite League/Team page
*/

export default class ChooseYourFavoritePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchPloceholderField () {
        return $('#search_bar_placeholder');
    }

    get searchInputField () {
        return $('#search_src_text');
    }
    
    get clearBtn () {
        return $('#search_close_btn');
    }
	
	get starIcon () {
        return $('#icon');
    }
	
	get chooseYourFavoriteTitleText () {
        return $('#title_onboarding');
    }
	
	// get continueBtn () { // from page
    //     return $('#btn_primary');
    // }
	
    // team - provide name of team, player or number (0,1,...) if any from the page 
	yourFavorite(team){
        if (typeof team == "number") {
            team = `//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/txt_name"][${team}]`
        } else {
            team = `//android.widget.TextView[@text="${team}"]`
        }
		return $(team)
	}
	
	async tapOnContinueBtn(){
        return this.continueBtn.click();
    }
	
	async tapOnYourFavorite(team){
        var teamElement = await this.yourFavorite(team);
		return teamElement.click();
    }

    async findChooseYourFavorit(name) {
        (await this.searchPloceholderField.isExisting()) ? await this.searchPloceholderField.click(): "";
        (await this.clearBtn.isExisting()) ? await this.clearBtn.click(): "";
        (await this.searchInputField).setValue(name);
        let loc = `//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/txt_name" and @text="${name}"]`
        await (await $(loc)).click();

    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return chooseYourFavoriteTitleText.waitForDisplayed({
            reverse: !isShown,
        });
    }
}

