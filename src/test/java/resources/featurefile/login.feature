@Regression
Feature: Login Test

  Background:  User is on Home page
    Given I am on Homepage
    When I Enter username
    And  I Enter password
    And I click on Login Button
  @smoke
  Scenario: User Should login Successfully with valid Credentials

    Then Verify the Text Products is displayed

  @sanity
  Scenario: verify Six Products Are Displayed On Page

    Then Verify six Products are Displayed on Page
