import Page from './page';

class Books extends Page{
	get header () 						{ return $("//h1[@class='center title-font']"); }
	get linkedIn ()						{ return $("//i[@class='fa fa-linkedin fa-2x']"); }
	get twitter () 						{ return $("//i[@class='fa fa-twitter fa-2x']"); }
	get github () 						{ return $("//i[@class='fa fa-github fa-2x']"); }
	get homeButton () 					{ return $("//ul[@class='topnav']/li/a"); }
	get portfolioButton () 				{ return $("//ul[@class='topnav']/li[1]/a"); }
	get booksButton () 					{ return $("//ul[@class='topnav']/li[2]/a"); }
	get coverArt () 					{ return $("//img[@class='size-2 img-thumbnail']"); }

	open() {
		super.open('books.html')
		browser.pause(2000);
	}

	waitForPageToLoad() {
		if(!this.header.isDisplayed()){
			this.header.waitForDisplayed(3000);
		}
	}

	getHeader() {
		return this.header;
	}

	getCoverArt() {
		return this.coverArt
	}

	getLinkedIn() {
		return this.linkedIn;
	}

	getTwitter() {
		return this.twitter;
	}

	getGitHub() {
		return this.github;
	}

	getHomeButton() {
		return this.homeButton;
	}

	getPortfolioButton() {
		return this.portfolioButton;
	}

	getBooksButton() {
		return this.booksButton;
	}

}

export default new Books();