import path from 'path';
const androidPath = path.join(process.cwd(), '.\\app\\theScore_24_9_0.apk');
import { expect } from '@wdio/globals';
import PageFactory from '../pageobjects/pageFactory.js';
import teamData from "../data/teamData.json" assert { type: "json" };
const getStartedPage = PageFactory.getPage('GetStartedPage');
const chooseYourFavoritePage = PageFactory.getPage('ChooseYourFavoritePage');
const popUpPage = PageFactory.getPage('PopUpPage');
const neverMissAGame = PageFactory.getPage('NeverMissAGame');
const introducingPage = PageFactory.getPage('IntroducingPage');
const mainPage = PageFactory.getPage('MainPage');
const teamPage = PageFactory.getPage('TeamPage');
const teamStatsPage = PageFactory.getPage('TeamStatsPage');

for (const team of teamData) {
    let teamCheck = team;
    describe(`Welcome to theScore with ${teamCheck.name}`, () => {
            beforeEach(`Navigate to the Main page with selected Team ${teamCheck.name}`, async () => {
                await driver.removeApp( "com.fivemobile.thescore");
                await driver.installApp(androidPath);
                await driver.activateApp("com.fivemobile.thescore");
                await expect(getStartedPage.startedBtn).toBeDisplayed();
                await getStartedPage.tapOnGetStartedBtn();
                await chooseYourFavoritePage.tapOnContinueBtn();
                await popUpPage.tapOnAllowTailoredContentLocationBtn();
                await popUpPage.tapOnWhileUsingTheAppBtn();
                await chooseYourFavoritePage.findChooseYourFavorit(teamCheck.name);
                //await chooseYourFavoritePage.tapOnYourFavorite(team.name);
                await chooseYourFavoritePage.tapOnContinueBtn();
                await neverMissAGame.tapOnContinueBtn();
                await introducingPage.tapOnMaybeLaterBtn();
                await popUpPage.tapOnCloseBtn();
                // Verify that the main page is displayed
                await mainPage.waitForIsShown();
            });

            it(`should navigate to the Team Stats page for ${teamCheck.name} and back to the Main page, unregister user`, async () => {
                await expect( await mainPage.firstFavoriteIconText.getText()).toEqual(teamCheck.nameMainPage);
                await mainPage.tapOnFirstFavoriteIcon();
                // Verify that the Team page is displayed.
                await teamPage.waitForIsShown(); //used to check for navigation to a page as usual when navigating through that page
                // All this verification can be grouped in one function in a PO
                await expect(teamPage.alertIconBtn).toBeDisplayed(); // used to validate specific data on this page
                await expect(teamPage.faworiteIconBtn).toBeDisplayed();
                await expect(teamPage.teamImageIcon).toBeDisplayed();
                await expect(teamPage.teamNameText).toBeDisplayed();
                await expect( await teamPage.teamNameText.getText()).toEqual(teamCheck.name);
                await expect(teamPage.teamDescriptionText).toBeDisplayed();
                await expect(teamPage.teamFormValueText).toBeDisplayed();
                await expect(teamPage.teamFormLabelText).toBeDisplayed();
                await expect(teamPage.streakValueText).toBeDisplayed();
                await expect(teamPage.streakLabelText).toBeDisplayed();
                await expect(teamPage.newsBtn).toBeDisplayed();
                await expect(teamPage.chatBtn).toBeDisplayed();
                await expect(teamPage.teamStatsBtn).toBeDisplayed();
                await teamPage.tapOnTeamStatsSubTab();
                // Verify that the Team Stats page is displayed.
                await teamStatsPage.waitForIsShown();
                await expect(teamStatsPage.offensiveStatsText).toBeDisplayed();
                await expect(teamStatsPage.rank1Text).toBeDisplayed();
                await expect(teamStatsPage.goalsText).toBeDisplayed();
                await expect(await teamStatsPage.goalsRankText.getText()).toEqual(teamCheck.goals);
                // Navigate to the Home page
                await teamStatsPage.tapBackBtn();
                await expect(mainPage.addButton).toBeDisplayed();
            });

            it(`should navigate to the Schedule page for ${teamCheck.name} and back to the Main page, unregister user`, async () => {
                await expect(mainPage.addButton).toBeDisplayed();
                // ...
                await expect(mainPage.addButton).toBeDisplayed();
            });
    });
};

