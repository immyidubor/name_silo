import { Builder, Capabilities, until, WebDriver } from "selenium-webdriver"
import { name_silo } from './pageObjects/placeholder';

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const namesiloFooter = new name_silo(driver);

describe('name_silo', () => {
    beforeEach(async () => {
        await namesiloFooter.navigate();
    });
    afterAll(async () => {
        await (await driver).quit();
    });

    it('should navigate to domains page', async () => {
        await driver.wait(until.elementLocated(namesiloFooter.cookieConfirm));
        expect(await(await driver.findElement(namesiloFooter.cookieConfirm)).getText()).toBe('Confirm');
        await (await driver.findElement(namesiloFooter.cookieConfirm)).click();

        await driver.wait(until.elementLocated(namesiloFooter.shoppingLabel));
        expect(await(await driver.findElement(namesiloFooter.shoppingLabel)).getText()).toBe('SHOPPING');

        let domain = await driver.wait(until.elementLocated(namesiloFooter.domains), 5000);
        expect(await(await driver.findElement(namesiloFooter.domains)).getText()).toBe('Domains');
        await driver.sleep(3000);
        await domain.click();
        await driver.sleep(5000);

        console.log('Clicked link to Domains page');

        /* const domainsUrl = 'https://www.namesilo.com/domain/search-domains';
        const currentUrl =  await driver.getCurrentUrl();
        expect(currentUrl).toBe(domainsUrl); */
    });

    it('should navigate to transfers page', async () => {
        let transfer = await driver.wait(until.elementLocated(namesiloFooter.transfers), 5000);
        expect(await(await driver.findElement(namesiloFooter.transfers)).getText()).toBe('Transfers');
        await driver.sleep(3000);
        await transfer.click();
        await driver.sleep(5000);

        console.log('Clicked link to Transfers page');

        /* const transferUrl = 'https://www.namesilo.com/domain/transfer-domains';
        const currentUrl =  await driver.getCurrentUrl();
        expect(currentUrl).toBe(transferUrl); */
    });

    it('should navigate to marketplace page', async () => {
        let marketPlace = await driver.wait(until.elementLocated(namesiloFooter.marketPlace), 5000);
        expect(await(await driver.findElement(namesiloFooter.marketPlace)).getText()).toBe('Marketplace');
        await marketPlace.click();
        await driver.sleep(5000);

        console.log('Clicked link to MarketPlace page');

        /* const marketPlaceUrl = 'https://www.namesilo.com/Marketplace';
        const currentUrl =  await driver.getCurrentUrl();
        expect(currentUrl).toBe(marketPlaceUrl); */
    });

    it('should navigate to pricing page', async () => {
        let pricing = await driver.wait(until.elementLocated(namesiloFooter.pricing));
        expect(await(await driver.findElement(namesiloFooter.pricing)).getText()).toBe('Pricing');
        await pricing.click();
        await driver.sleep(5000);

        console.log('Clicked link to Pricing page');

        /* const pricingUrl = 'https://www.namesilo.com/pricing';
        const currentUrl =  await driver.getCurrentUrl();
        expect(currentUrl).toBe(pricingUrl); */
    });
});