import Page from './page'

class Index extends Page{
	get header () 			{ return $("//h1[@class='center title-font']"); }
	get linkedIn ()			{ return $("//i[@class='fa fa-linkedin fa-2x']"); }
	get twitter () 			{ return $("//i[@class='fa fa-twitter fa-2x']"); }
	get github () 			{ return $("//i[@class='fa fa-github fa-2x']"); }
	get contactButton () 	{ return $("//a[@class='contact-btn']"); }
	get description () 		{ return $("//p[@class='center summary']"); }
	get homeButton () 		{ return $("//ul[@class='topnav']/li/a"); }
	get portfolioButton () 	{return $("//ul[@class='topnav']/li[1]/a")}
	get booksButton () 		{return $("//ul[@class='topnav']/li[2]/a")}

	open() {
		super.open('index.html')
		browser.pause(2000);
	}

	waitForPageToLoad() {
		if(!this.header.isDisplayed()){
			this.header.waitForDisplayed(3000);
		}
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

	getContactButton() {
		return this.contactButton;
	}

	clickContactButton() {
		this.contactButton.click();
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

export default new Index();