package com.saucedemo.sw6.pages;

import com.saucedemo.sw6.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class InventoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(InventoryPage.class.getName());

    public InventoryPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(className ="title" )
    WebElement productsText;

    public String getProductText(){
        log.info("Get Product Text from : "+ productsText.toString());
        return getTextFromElement(productsText);

    }
    public int findActualNumberOfProducts(){
        log.info("Find Actual Number of product ");
        List<WebElement> productList=findElementsFromWebPage(By.xpath("//img[starts-with(@class,'inventory_item_img')]"));
        return productList.size();
    }

}
