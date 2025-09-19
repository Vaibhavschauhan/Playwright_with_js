const {test, expect} = require('@playwright/test');
const { asyncWrapProviders } = require('async_hooks');

test('First PW test', async ({browser})=>
{
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://rahulshettyacademy.com/client');

});

test('Mini project PW', async ({page})=>
{   
    // await page.pause();
    const email = "anshika@gmail.com";
    const pass = "Iamking@000";
    const products = page.locator('.card-body');
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(pass);
    await page.locator('#login').click();
    // await page.pause;
    const productName = "iphone 13 pro";
    await page.waitForLoadState('networkidle');
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if(await products.nth(i).locator('b').textContent()===productName){
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
        
    }
    await page.locator("[routerlink='/dashboard/cart']").click();
    await page.locator('text=Buy Now').click();
    await page.locator('.input txt text-validated').first().fill('4542 9931 9292 2293');
    await page.locator('select.input ddl').first().selectOption(4);
    await page.locator('select.input ddl').last().selectOption(4);
    





});

