//random password
function gen_password(len){
    if(len > 10) len = 10;
    len = len * (-1);
    return Math.random().toString(36).slice(len);
  };
class SignUpPage{
    //Get elements:
    invEmailInutField() {
        return cy.get('#email');
    }
    nameInutField() {
        return cy.get('#full_name');
    }
    passwordInutField() {
        return cy.get('#password');
    }
    agreeWpBtn() {
        return cy.get('[aria-labelledby="terms-label"] svg rect');
    }
    submitBtn() {
        return cy.get('div[class="sc-5d3a275a-0 jdjrgE"]');
    }
    positiveEmailRes() {
        return cy.get('[class="Text-sc-5o8owa-0 sc-81d2e95d-1 gkWopw etvJmf"]');
    }
    invPasswordRes() {
        return cy.get('label[class="sc-323a5919-0 kWEHjh"]');
    }
    invEmailRes() {
        return cy.get('label[for="email"]');
    }
    emptyEmailRes() {
        return cy.get('[class="sc-25ef9dc0-1 fMtvwP"][id="email_error"]');
    }
    emptyNameRes() {
        return cy.get('[class="sc-25ef9dc0-1 fMtvwP"][id="full_name_error"]');
    }
    //Methods:
    invEmailInput() {
        this.invEmailInutField().type("invalidEmail");
    }
    nameInput() {
        this.nameInutField().type("Not RealName");
    }
    passwordInput() {
        this.passwordInutField().type("testFor_347865");
    }
    invPasswordInput() {
        this.passwordInutField().type(gen_password());
    }
    agreeWpBtnClick() {
        this.agreeWpBtn().click();
    }
    submitBtnClick() {
        this.submitBtn().click();
        this.submitBtn().click();
        //Methods are repeated because otherwise it simply will not work.
    }
    positiveEmailResCheck() {
        this.positiveEmailRes().should('have.text', "We've sent you an email to activate your account");
    }
    invPasswordInputCheck() {
        this.invPasswordRes().should('have.css', 'color', 'rgb(215, 57, 57)');
    }
    invEmailInputCheck() {
        this.invEmailRes().should('have.css', 'color', 'rgb(215, 57, 57)');
    }
    emptyEmailInputCheck() {
        this.emptyEmailRes().should('have.text', "This field is required.");
    }
    emptyNameInputCheck() {
        this.emptyNameRes().should('have.text', "This field is required.");
    }
}
export default SignUpPage;