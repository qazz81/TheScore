import Page from '../pageobjects/page.js';
import GetStartedPage from '../pageobjects/getStartedPage.js';
import ChooseYourFavoritePage from '../pageobjects/chooseYourFavoritePage.js';
import PopUpPage from '../pageobjects/popUpPage.js';
import NeverMissAGame from '../pageobjects/neverMissAGame.js';
import IntroducingPage from '../pageobjects/introducingPage.js';
import MainPage from '../pageobjects/mainPage.js';
import TeamPage from '../pageobjects/teamPage.js';
import TeamStatsPage from '../pageobjects/teamStatsPage.js';

class PageFactory {
    
    static getPage(pageName) {
        switch (pageName) {
            case 'GetStartedPage':
                return new GetStartedPage();
            case 'ChooseYourFavoritePage':
                return new ChooseYourFavoritePage();
            case 'PopUpPage':
                return new PopUpPage();
            case 'NeverMissAGame':
                return new NeverMissAGame();
            case 'IntroducingPage':
                return new IntroducingPage();
            case 'MainPage':
                return new MainPage();
            case 'TeamPage':
                return new TeamPage();
            case 'TeamStatsPage':
                return new TeamStatsPage();
            default:
                return new Page();
        }
    }
} 

export default PageFactory;
