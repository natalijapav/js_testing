'use strict';

const { Builder, By, until, Key } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

describe('QA Test', function() {
    let driver
;   
    before(async function() {
    let service = new chrome.ServiceBuilder('C:\\Users\\natal\\testing\\chromedriver.exe').build()
    chrome.setDefaultService(service);

    driver = await new Builder().forBrowser('chrome').build();
    });

    after(function() {
        return driver.quit();
    }); 

    it('Opens test.qa.rs homepage', async function() {
        await driver.get('http://test.qa.rs');

        expect(await driver.findElement(By.css('h1')).getText()).to.contain('QA FastFood');
    });

    it('Goes to registration page', async function() {
        const register = await driver.findElement(By.linkText('Register'));
        await register.click();

        expect(await driver.getCurrentUrl()).to.eq('http://test.qa.rs/register');
    });

    it('Successfully performs registration', async function() {
        const ime = await driver.findElement(By.name('firstname'));
        ime.sendKeys('Nata');

        const prezime = await driver.findElement(By.name('lastname'));
        prezime.sendKeys('Pavl');

        const email = await driver.findElement(By.name('email'));
        email.sendKeys('nata@lala.com');

        const korisnicko = await driver.findElement(By.name('username'));
        korisnicko.sendKeys('nataa');

        const lozinka = await driver.findElement(By.name('password'));
        lozinka.sendKeys('natata');

        const lozinkaOpet = await driver.findElement(By.name('passwordAgain'));
        lozinkaOpet.sendKeys('natata');

        const registracija = await driver.findElement(By.name('register'));
        await registracija.click();

        
        expect(await driver.findElement(By.className('alert alert-success')).getText()).to.contain('Success!');
        
    });


    it('Goes to login page', async function() {
        const register = await driver.findElement(By.linkText('Login'));
        await register.click();
    
        expect(await driver.getCurrentUrl()).to.eq('http://test.qa.rs/login');
    });
    
    it('Successfully performs login', async function() {
        const username = await driver.findElement(By.name('username'));
        username.sendKeys('nataa');
    
        const password = await driver.findElement(By.name('password'));
        password.sendKeys('natata');
    
        const login = await driver.findElement(By.name('login'));
        await login.click();
    
        expect(await driver.findElement(By.css('h2')).getText()).to.contain('Welcome back');
    });
    
    it('Adds item to cart - 3 items', async function() {
        const packageName = await driver.findElement(By.xpath('//h3[contains(text(), "Burger")]/ancestor::div[contains(@class, "panel-heading")]'));
        const quantity = await packageName.findElement(By.xpath('/html/body/div[2]/div[4]/div[2]/div/div[2]/form/p[3]/input'));
        const options = await quantity.findElements(By.css('option'));

        await Promise.all(options.map(async function(option) {
            const text = await option.getText();
            if (text === '1') {
                await option.click();

                const selectedValue = await quantity.getAttribute('value');
                expect(selectedValue).to.contain('1');

                const orderButton = await packageName.findElement(By.className('btn btn-primary'));
                await orderButton.click();

                const url = await driver.getCurrentUrl();
                expect(url).to.contain('http://test.qa.rs/order');                
            }
        }));

    });

  
  
    it('Verifies items are in cart', async function() {
        const orderTable = await driver.findElement(By.css('table'));
        const orderRow = await orderTable.findElement(
                By.xpath('//table//td[contains(.,"BURGER")]/parent::tr//td[2]')
            );
        
        
        expect(await orderQty.getText()).to.eq('1');
        
    });

    it('Performs Checkout', async function() {
        const checkout = await driver.findElement(By.name('checkout'));
        await checkout.click();
        
        expect(await driver.getCurrentUrl()).to.eq('http://test.qa.rs/checkout');
        
    });

    it('Performs logout', async function() {
        const logout = await driver.findElement(By.partialLinkText('Logout'));
        await logout.click();
        
        expect(await driver.findElement(By.linkText('Login')).isDisplayed()).to.be.true;
    });



});





