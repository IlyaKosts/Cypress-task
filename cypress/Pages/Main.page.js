//Random email
let endings = ["gmail.com"],
    symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
function rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
};
function getRandomStr(len) {
    let ret = ""
    for (let i = 0; i < len; i++)
        console.log(ret += symbols[rand(0, symbols.length - 1)]);
    return ret;
};
function getEmail() {
    let a = getRandomStr(rand(3, 5)),
        b = getRandomStr(rand(3, 5));
    return a + "_" + b + "." + a + "@" + endings[rand(0, endings.length - 1)];
};
class MainPage{
    //Get elements:
    emailInutField() {
        return cy.get('input[type="email"]');
    }
    nameInutField() {
        return cy.get('[#full_name]');
    }
    passwordInutField() {
        return cy.get('[#password]');
    }
    agreeWpBtn() {
        return cy.get('[aria-labelledby="terms-label"] svg rect');
    }
    tryBtn() {
        return cy.get('button[type="submit"]');
    }
    supportBtn() {
        return cy.get('[class="sc-602eb426-2 kDbJNh"] a[href="https://support.telnyx.com"]');
    }
    shearchInutField() {
        return cy.get('[class="search__input js__search-input o__ltr"]');
    }
    logInBnt() {
        return cy.get('[href="https://portal.telnyx.com/"][target="_blank"]');
    }
    bottomElem() {
        return cy.get('li[class="sc-7b6c9f9b-9 fwhIL"] a[href="/products/sip-trunks"]');
    }
    bottomElements() {
        return cy.get('div[class="sc-7b6c9f9b-2 jSHfbB"] span[class="sc-6c41f57a-0 gvobTR"]');
    }
    listOfDropElem() {
        return cy.get('[class="sc-9d98fd33-0 bRlGsp"]');
    }
    prodDropElem() {
        return cy.xpath('//span[text()="Products"]');
    }
    soluDropElem() {
        return cy.xpath('//span[text()="Solutions"]');
    }
    resourDropElem() {
        return cy.xpath('//span[text()="Resources"]');
    }
    compDropElem() {
        return cy.xpath('//span[text()="Company"]');
    }
    pricingDropElem() {
        return cy.xpath('//span[text()="Pricing"]');
    }
    prodListElem() {
        return cy.get('[class="sc-7b3980dc-10 hsvoTZ"] a[href="/products"]');
    }
    soluListElem() {
        return cy.xpath('//span[text()="Customer Engagement Platforms"]');
    }
    resourListElem() {
        return cy.xpath('//span[text()="Savings Calculator"]');
    }
    compListElem() {
        return cy.xpath('//span[text()="About Telnyx"]');
    }
    pricingListElem() {
        return cy.xpath('//span[text()="See all Pricing"]');
    }
    //Methods:
    emailInput() {
        this.emailInutField().type(getEmail() + '{enter}');
    }
    tryBtnClick() {
        this.tryBtn().click();
    }
    supportBtnClick() {
        this.supportBtn().invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
        });
    }
    shearchInut() {
        this.shearchInutField().type('toSearchSomething{enter}')
    }
    logInBntClick() {
        this.logInBnt().invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
        });
    }
    bottomElemScroll() {
        this.bottomElem().scrollIntoView();
    }
    bottomElemCheck() {
        this.bottomElements().should('be.visible');
    }
    listOfDropElemHover() {
        this.listOfDropElem().realHover('mouse');
    }
    prodDropElemHover() {
        this.prodDropElem().realHover('mouse');
    }
    prodListElemCheck() {
        this.prodListElem().should('be.visible');
    }
    soluDropElemHover() {
        this.soluDropElem().realHover('mouse');
    }
    soluListElemCheck() {
        this.soluListElem().should('be.visible');
    }
    resourDropElemHover() {
        this.resourDropElem().realHover('mouse');
    }
    resourListElemCheck() {
        this.resourListElem().should('be.visible');
    }
    compDropElemHover() {
        this.compDropElem().realHover('mouse');
    }
    compListElemCheck() {
        this.compListElem().should('be.visible');
    }
    pricingDropElemHover() {
        this.pricingDropElem().realHover('mouse');
    }
    pricingListElemCheck() {
        this.pricingListElem().should('be.visible');
    }
}
export default MainPage;