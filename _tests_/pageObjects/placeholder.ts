import { By, WebDriver } from "selenium-webdriver";

export class name_silo {
    // Search Domain locators
    searchBar: By = By.css('input.form-control.bn.brl12.brr0.py32.px20.fs16.fs22-M.cdi');
    searchButton: By = By.css('button.button.button-lg.bgcr.brr12.brl0.fs16.fw7');
    domainCheck: By = By.css('div.mt-n16 > div.px-lg-60 > div:nth-child(1) div.c-di.lh-13.c-di');
    cookieConfirm: By = By.css('button.button.bgcw.button-md');
    add: By = By.css('div.px-lg-60 > div.py-16.bdb.bdc-6:nth-child(1) button.btn.bgc-b.btn-sm.miw-112');
    addFeatures: By = By.css('button.btn.bgc-g.btn-sm.bs-sm');
    checkout: By = By.css('button.btn.bgc-r.btn-sm.miw-112');
    requestError: By = By.css('div.modal-dialog__subject');
    dialogBtn: By = By.css('div.modal-dialog__buttons > a.btn.btn-modal.btn-sm.bgc-b');

    // Footer Section(SHOPPING)
    shoppingLabel: By = By.css('div.R.gy32 > div:nth-child(2) > div.fw7.mb28.cdi');
    domains: By = By.xpath('//a[text()="Domains"]'); // By.css('a[href="https://www.namesilo.com/domain/search-domains"]');
    transfers: By = By.xpath('//a[text()="Transfers"]'); // By.css('a[href="https://www.namesilo.com/domain/transfer-domains"]');
    marketPlace: By = By.xpath('//a[text()="Marketplace"]'); // By.css('a[href="https://www.namesilo.com/Marketplace"]');
    pricing: By = By.xpath('//a[text()="Pricing"]'); // By.css('a[href="https://www.namesilo.com/pricing"]');

    // Login
    login: By = By.css('.header-secondary-right a.header-secondary-right-item:nth-child(1)');
    username: By = By.css('input[placeholder="Enter your username"]');
    emailAddress: By = By.css('input[placeholder="Enter your email adress"]');
    password: By = By.css('input[placeholder="Enter your password"]');
    confirmPassword: By = By.css('input[placeholder="Confirm your password"]');
    notRobot: By = By.css('span.recaptcha-checkbox.goog-inline-block.recaptcha-checkbox-unchecked.rc-anchor-checkbox');
    createAccountButton: By = By.css('button.button.button-lg.bgcr.miw192');
  
    driver: WebDriver;

    url: string = 'https://www.namesilo.com';

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate(): Promise <void> {
        return await this.driver.get(this.url);
    }
}