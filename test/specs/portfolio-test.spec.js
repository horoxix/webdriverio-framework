import Portfolio from '../pageobjects/portfolio.page';
import { expect } from 'chai';

describe('navigating to portfolio page', () => {
    it('should allow user to navigate to portfolio page', () => {
        Portfolio.open();
        Portfolio.waitForPageToLoad();
        console.log(Portfolio.getProfessionalProjectsHeader().getText());
        expect(Portfolio.getProfessionalProjectsHeader().getText()).to.contain('Professional Projects');

        let elem = $('#element');
        let isExisting = elem.isExisting();

        elem = Portfolio.getTwitter();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getLinkedIn();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getGitHub();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getProfessionalProjectsHeader();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getPersonalProjectsHeader();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getEducationalProjectsHeader();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getHomeButton();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getPortfolioButton();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Portfolio.getBooksButton();
        isExisting = elem.isExisting();
        console.log(isExisting);
    });
});