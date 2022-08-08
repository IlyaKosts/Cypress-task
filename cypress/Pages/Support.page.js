class SupportPage {
    //Get elements:
    shearchInputField() {
        return cy.get('[class="search__input js__search-input o__ltr"]');
    }
    shearchInputResA() {
        return cy.get('[class="section__content"]');
    }
    getStartedBtn() {
        return cy.get('a[href="/en/collections/133094-getting-started"]');
    }
    howToSuBtn() {
        return cy.get('a[href="/en/articles/5295540-how-to-sign-up-for-a-telnyx-account"]');
    }
    howToSuRes() {
        return cy.get('[class="t__h1"]');
    }
    //Methods:
    shearchInput() {
        this.shearchInputField().type('toSearchSomething{enter}');
    }
    getStartedBtnClick() {
        this.getStartedBtn().click();
    }
    howToSuBtnClick() {
        this.howToSuBtn().click();
    }
    shearchResultACheck() {
        this.shearchInputResA().should('have.text', "\n      We couldn't find any articles for: toSearchSomething\n    ");
    }
    howToSuResCheck() {
        this.howToSuRes().should('be.visible').and('have.text', 'How to Sign Up for a Telnyx account');
    }
}
export default SupportPage;