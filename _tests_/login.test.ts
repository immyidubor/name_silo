import { Builder, Capabilities, until, WebDriver } from "selenium-webdriver"
import { name_silo } from './pageObjects/placeholder';

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const loginAccount = new name_silo(driver);

describe('name_silo', () => {
    beforeEach(async () => {
        await loginAccount.navigate();
    });
    afterAll(async () => {
        await (await driver).quit();
    });

    it('should navigate to login page and fill in form to create account', async () => {
        let login = await driver.wait(until.elementLocated(loginAccount.login));
        expect(await(await driver.findElement(loginAccount.login)).getText()).toBe('Login');
        await driver.sleep(5000);
        await login.click();
        await driver.sleep(5000);

        console.log('Routed to login page');

        const loginPageUrl = 'https://www.namesilo.com/login';
        const currentUrl =  await driver.getCurrentUrl();
        expect(currentUrl).toBe(loginPageUrl);

        await (await driver).wait(until.elementLocated(loginAccount.username));
        await (await driver).findElement(loginAccount.username).sendKeys('tinyan');

        console.log('Entered username');

        await (await driver).wait(until.elementLocated(loginAccount.emailAddress));
        await (await driver).findElement(loginAccount.emailAddress).sendKeys('immyidubor@yahoo.com');

        console.log('Entered email address');

        await (await driver).wait(until.elementLocated(loginAccount.password));
        await (await driver).findElement(loginAccount.password).sendKeys('christ');

        console.log('Entered password');

        await (await driver).wait(until.elementLocated(loginAccount.confirmPassword));
        await (await driver).findElement(loginAccount.confirmPassword).sendKeys('christ');

        console.log('Confirmed password');

        await driver.wait(until.elementLocated(loginAccount.createAccountButton));
        expect(await(await driver.findElement(loginAccount.createAccountButton)).getText()).toBe('Create Account');
        await (await driver.findElement(loginAccount.createAccountButton)).click();
    });
});
