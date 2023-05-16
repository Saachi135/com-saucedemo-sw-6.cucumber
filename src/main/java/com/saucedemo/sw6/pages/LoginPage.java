package com.saucedemo.sw6.pages;

import com.saucedemo.sw6.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(id ="user-name")
    WebElement userNameField;
    @CacheLookup
    @FindBy( id="password" )
    WebElement passwordField;
    @CacheLookup
    @FindBy( id="login-button" )
    WebElement loginButton;

    public void enterUserName(String userName){
        log.info("Enter User Name :"+ userNameField.toString());
        sendTextToElement(userNameField,userName);
    }

    public void enterPassword(String password){
        log.info("Enter Password :"+ passwordField.toString());
        sendTextToElement(passwordField,password);
    }

    public void clickOnLoginButton(){
        log.info("Click on Login Button :"+ loginButton.toString());
        clickOnElement(loginButton);
    }
}
