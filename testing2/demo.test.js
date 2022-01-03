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
        await driver.get('http://demoqa.com/');

        expect(await driver.findElement(By.css('h5')).getText()).to.contain('Elements');

    });
    
    it('Opens Elements page', async function(){

        const clickPage = await driver.findElement(By.xpath('//h5[contains(.,"Elements")]/parent::div[contains(@class, "card")]')
        );
        await clickPage.click();

        expect(await driver.getCurrentUrl()).to.eq('https://demoqa.com/elements');


    });
    






});    