$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 19485378599,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Enter password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 613354600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterUsername()"
});
formatter.result({
  "duration": 1114449900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPassword()"
});
formatter.result({
  "duration": 558934200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 833282501,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User Should login Successfully with valid Credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Verify the Text Products is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.verifyTheTextProductsIsDisplayed()"
});
formatter.result({
  "duration": 344962200,
  "status": "passed"
});
formatter.after({
  "duration": 1830138600,
  "status": "passed"
});
formatter.before({
  "duration": 8119752699,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Enter password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterUsername()"
});
formatter.result({
  "duration": 584780000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPassword()"
});
formatter.result({
  "duration": 235157599,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 311319800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify Six Products Are Displayed On Page",
  "description": "",
  "id": "login-test;verify-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Verify six Products are Displayed on Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.verifySixProductsAreDisplayedOnPage()"
});
formatter.result({
  "duration": 685992700,
  "status": "passed"
});
formatter.after({
  "duration": 1961745300,
  "status": "passed"
});
});