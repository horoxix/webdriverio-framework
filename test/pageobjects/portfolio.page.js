import Page from './page';

class Portfolio extends Page{
	get header () 						{ return $("//h1[@class='center title-font']"); }
	get linkedIn ()						{ return $("//i[@class='fa fa-linkedin fa-2x']"); }
	get twitter () 						{ return $("//i[@class='fa fa-twitter fa-2x']"); }
	get github () 						{ return $("//i[@class='fa fa-github fa-2x']"); }
	get professionalProjectsHeader () 	{ return $("//div[@class='container main-div']/div/div/h1"); }
	get personalProjectsHeader () 		{ return $("//div[@class='container main-div']/div/div[2]/h1"); }
	get educationalProjectsHeader () 	{ return $("//div[@class='container main-div']/div/div[2]/div[2]/h1"); }
	get homeButton () 					{ return $("//ul[@class='topnav']/li/a"); }
	get portfolioButton () 				{ return $("//ul[@class='topnav']/li[1]/a")}
	get booksButton () 					{ return $("//ul[@class='topnav']/li[2]/a")}

	open() {
		super.open('portfolio.html')
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

	getProfessionalProjectsHeader() {
		return this.professionalProjectsHeader;
	}
	
	getPersonalProjectsHeader() {
		return this.personalProjectsHeader;
	}

	getEducationalProjectsHeader() {
		return this.educationalProjectsHeader;
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

export default new Portfolio();