import Books from '../pageobjects/books.page';
import { expect } from 'chai';

describe('navigating to books page', () => {
    it('should allow user to navigate to books page', () => {
        Books.open();
        Books.waitForPageToLoad();
        console.log(Books.getHeader().getText());
        expect(Books.getHeader().getText()).to.contain('Books');

        let elem = $('#element');
        let isExisting = elem.isExisting();

        elem = Books.getTwitter();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Books.getLinkedIn();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Books.getGitHub();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Books.getHomeButton();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Books.getPortfolioButton();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Books.getBooksButton();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Books.getHeader();
        isExisting = elem.isExisting();
        console.log(isExisting);

        elem = Books.getCoverArt();
        isExisting = elem.isExisting();
        console.log(isExisting);
    });
});