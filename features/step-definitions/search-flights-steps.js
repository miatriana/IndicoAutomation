const { Given, When, Then } = require('@wdio/cucumber-framework');


const SearchFlights = require('../pageobjects/search-flights-objects.page');

Given(/^User open browser (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^user access the WeFly airlines website(\w+) and (.+)$/, async (page) => {
   await pages[page].open()
});

When(/^user see the website homepage (\w+) and (.+)$/, async (page) => {
    await pages[page].open()
 });

 When(/^user click flights(\w+) and (.+)$/, async (page) => {
    await pages[page].open()
 });

Then(/^User should be able to search for flight tickets (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
    
});  
