'use strict';

const { Builder, By, until, Key } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

describe('Demo QA Tests', function() {
    let driver;

    before(async function() {
        let service = new chrome.ServiceBuilder('C:\\Users\\natal\\testing\\chromedriver.exe').build()
        chrome.setDefaultService(service);

        driver = await new Builder().forBrowser('chrome').build();
    });

    after(function() {
        return driver.quit();
    });

    it('Opens demoqa.com homepage', async function() {
        await driver.get('https://demoqa.com/');

        expect(await driver.getCurrentUrl()).to.eq('https://demoqa.com/');

    });
    
    it('Opens Elements page', async function(){

        const clickPage = await driver.findElement(By.xpath('//h5[contains(.,"Elements")]/parent::div[contains(@class, "card")]')
        );
        await clickPage.click();

        expect(await driver.getCurrentUrl()).to.eq('https://demoqa.com/elements');


    });
    
    it('Opens textbox page, fills the form and submits', async function(){


        const textP = await driver.findElement(By.id('item-0'))
        await textP.click();

        expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Text Box');


        const name = await driver.findElement(By.id('userName'));
        name.sendKeys('nata');

        const email = await driver.findElement(By.id('userEmail'));
        email.sendKeys('natatata@example.local');

        const trenutnaAdresa = await driver.findElement(By.id('currentAddress'));
        trenutnaAdresa.sendKeys('trenutna');

        const trajnaAdresa = await driver.findElement(By.id('permanentAddress'));
        trajnaAdresa.sendKeys('Trajna');

        const submit = await driver.findElement(By.id('submit'));
        await submit.click();


    });







});    