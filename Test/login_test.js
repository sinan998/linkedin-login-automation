Feature('login');

Before(({I}) => {
    I.goLoginPage();
}),

Scenario('the field is blank and Submit button is clicked.', ({ I,loginPagePage }) => {
    loginPagePage.fillForm("","");
    loginPagePage.errorForUsername();

});

Scenario('login with a valid username and invalid password.', ({ I,loginPagePage }) => {
    loginPagePage.fillForm("yicov24245@syswift.com","ddd");
    loginPagePage.errorForPassword();

});


Scenario('login with a valid inusername and valid password.', ({ I,loginPagePage }) => {
    loginPagePage.fillForm("asdsadsa","Asdf.123");
    loginPagePage.errorForUsername();

});


Scenario('login with a valid username and valid password.', ({ I,loginPagePage }) => {
    loginPagePage.fillForm("yicov24245@syswift.com","Asdf.123");
    I.waitForElement(I.getParameter("homePage"));
    I.seeElement(I.getParameter("homePage"));
});

Scenario('‘Forgot Password’ functionality.', ({ I,loginPagePage }) => {
    I.waitForElement(I.getParameter("forgotPasswordButton"));
    I.click(I.getParameter("forgotPasswordButton"));
    I.waitForElement(I.getParameter("passwordResetPage"));
    I.seeElement(I.getParameter("passwordResetPage"));
});

Scenario('use Enter key for login', ({ I,loginPagePage }) => {
    I.fillField(I.getParameter("username"),"yicov24245@syswift.com");
    I.fillField(I.getParameter("password"),"Asdf.123");
    I.pressKey(['Enter']);
    I.waitForElement(I.getParameter("homePage"));
    I.seeElement(I.getParameter("homePage"));
});

Scenario('show password button', ({ I,loginPagePage }) => {
    I.fillField(I.getParameter("username"),"yicov24245@syswift.com");
    I.fillField(I.getParameter("password"),"Asdf.123");
    I.click(I.getParameter("showPasswordButton"));
    I.waitForElement(I.getParameter("hiddenPassword"));
    I.seeElement(I.getParameter("hiddenPassword"));
});

