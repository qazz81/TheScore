import Page from './page.js';

/**
 * Team page containing specific selectors and methods
 */
export default class TeamPage extends Page {
    /**
     * define selectors and methods for a head of Team Page
     */
	
	get teamImageIcon () {
        return $('#team_logo');
    }
	
	get teamNameText () {
        return $('#team_name');
    }
	
	get teamDescriptionText () {
        return $('#team_description');
    }

    get teamFormValueText () {
        return $('#team_form_value');
    }

    get teamFormLabelText () {
        return $('#team_form_label');
    }

    get streakValueText () {
        return $('#streak_value');
    }

    get streakLabelText () {
        return $('#streak_label');
    }
	
	get newsBtn () {
        return $('//android.widget.TextView[@text="NEWS"]');
    }
	
	get chatBtn () {
        return $('//android.widget.TextView[@text="CHAT"]');
    }

    get teamStatsBtn () {
        return $('//android.widget.TextView[@text="TEAM STATS"]');
    }
	
	async tapBackBtn(){
        return this.navigateUpBtn.click();
    }
	
	async tapAlertIconBtn(){
        return this.alertIconBtn.click();
    }
	
	async tapFaworiteIconBtn(){
        return this.faworiteIconBtn.click();
    }
	
	async tapOnTeamStatsSubTab(){
        return this.teamStatsBtn.click();
    }

    /**
     * Wait for the page to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return this.teamImageIcon.waitForDisplayed({
            reverse: !isShown,
        });
    }
}
