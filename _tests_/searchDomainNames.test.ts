import { Builder, Capabilities, until, WebDriver } from "selenium-webdriver"
import { name_silo } from './pageObjects/placeholder';

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const searchDomain = new name_silo(driver);

describe('name_silo site', () => {
    beforeEach(async () => {
        // jest.setTimeout(30000);
        await searchDomain.navigate();
    });
    afterAll(async () => {
        await (await driver).quit();
    });

    it('should search domain name, add product to cart and expect error dialog', async () => {
        await (await driver).wait(until.elementLocated(searchDomain.searchBar));
        await (await driver).findElement(searchDomain.searchBar).sendKeys('mystyfied');

        console.log('Typed in keywords for input');
    
        await driver.wait(until.elementLocated(searchDomain.searchButton));
        expect(await(await driver.findElement(searchDomain.searchButton)).getText()).toBe('SEARCH DOMAIN');
        await (await driver.findElement(searchDomain.searchButton)).click();

        console.log('Clicked on search button');
    
        await driver.wait(until.elementLocated(searchDomain.domainCheck));
        expect(await(await driver.findElement(searchDomain.domainCheck)).getText()).toBe('mystyfied.com');

        console.log('Verify the correct domain name');

        await driver.wait(until.elementLocated(searchDomain.cookieConfirm));
        expect(await(await driver.findElement(searchDomain.cookieConfirm)).getText()).toBe('Confirm');
        await (await driver.findElement(searchDomain.cookieConfirm)).click();

        console.log('Clicked the confirm dialog');

        await driver.wait(until.elementLocated(searchDomain.add));
        expect(await(await driver.findElement(searchDomain.add)).getText()).toBe('Add');
        await (await driver.findElement(searchDomain.add)).click();

        console.log('Clicked the Add button');

        await driver.wait(until.elementLocated(searchDomain.requestError));
        expect(await(await driver.findElement(searchDomain.requestError)).getText()).toBe('Request execution error');

        await driver.wait(until.elementLocated(searchDomain.dialogBtn));
        await (await driver.findElement(searchDomain.dialogBtn)).click();

        console.log('Dialog error modal closed');

        // await driver.wait(until.elementLocated(searchDomain.checkout));
        // console.log(await(await driver.findElement(searchDomain.checkout)).getText());
        // await (await driver.findElement(searchDomain.checkout)).click();

        // console.log('Checked out');
    });
});
