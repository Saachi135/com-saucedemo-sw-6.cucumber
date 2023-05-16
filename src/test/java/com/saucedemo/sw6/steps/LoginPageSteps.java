package com.saucedemo.sw6.steps;

import com.saucedemo.sw6.pages.InventoryPage;
import com.saucedemo.sw6.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginPageSteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I Enter username$")
    public void iEnterUsername() {
        new LoginPage().enterUserName("standard_user");
    }

    @And("^I Enter password$")
    public void iEnterPassword() {
        new LoginPage().enterPassword("secret_sauce");
    }

    @And("^I click on Login Button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^Verify the Text Products is displayed$")
    public void verifyTheTextProductsIsDisplayed() {
        String expectedText = "Products";
        String actualText = new InventoryPage().getProductText();
        Assert.assertEquals(actualText, expectedText, "Expected Text does not displayed");
    }

    @Then("^Verify six Products are Displayed on Page$")
    public void verifySixProductsAreDisplayedOnPage() {
        int expectedNumberOfProducts = 6;
        int actualNumberOfProducts = new InventoryPage().findActualNumberOfProducts();
        Assert.assertEquals(actualNumberOfProducts, expectedNumberOfProducts, "Number of products are not 6");
    }
}


