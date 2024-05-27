import TeamPage from './teamPage.js';

/**
 * Team page containing specific selectors and methods
 */
export default class TeamStatsPage extends TeamPage {
    /**
     * define selectors and methods using for Team Stats
     */
	
    get offensiveStatsText () {
        return $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/header_text" and @text="OFFENSIVE STATS"]');
    }
	
	get rank1Text () {
        return $('(//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/header_secondary_text"])[1]');
    }
	
    get goalsText () {
        return $('//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/text_category_name" and @text="Goals"]');
    }
    
    get goalsRankText () {
        return $('(//android.widget.TextView[@resource-id="com.fivemobile.thescore:id/text_value"])[1]');
    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.offensiveStatsText.waitForDisplayed({
            reverse: !isShown,
        });
    }
}
