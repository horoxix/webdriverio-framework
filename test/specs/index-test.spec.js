import Index from '../pageobjects/index.page';
import { expect } from 'chai';

describe('navigating to index page', () => {
    it('should allow user to navigate to index page', () => {
        Index.open();
        Index.waitForPageToLoad();
        console.log(Index.getContactButton().getText());
        expect(Index.getContactButton().getText()).to.contain('Contact Me');

        let elem = $('#element');
        let isExisting = elem.isExisting();

        elem = Index.getTwitter();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Index.getLinkedIn();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Index.getGitHub();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Index.getHomeButton();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Index.getPortfolioButton();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Index.getBooksButton();
        isExisting = elem.isExisting();
        console.log(isExisting);
    });
});