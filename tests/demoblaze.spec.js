const {test, expect} = require('@playwright/test');
const { asyncWrapProviders } = require('async_hooks');
import { homepage } from './POM/homepage';

test('Demo Blaze', async ({browser})=>
{
    
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.pause();
    const nametf = 'Vaibhav';
    const countrytf = 'India';
    const cardtf ='123456789012';
    const citytf='Kanpur';
    const monthtf='June';
    const yeartf='2004';
    const hp = new homepage(page);
    
    await page.goto('https://demoblaze.com/index.html');
    // await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    hp.productaddcart(nametf,countrytf,cardtf,citytf,monthtf,yeartf);
    // await page.locator('text=Add to cart').click();
    // page.on('dialog',dialog=>dialog.accept());
    
    // const procart=  page.locator("td:has-text('Samsung galaxy s6')").isVisible();
    // expect(procart).toBeTruthy();
    // await page.locator('.btn btn-success').click();
    // await page.locator('#name').fill('Vaibhav');
    // await page.locator('#country').fill('India');
    // await page.locator('#city').fill('Kanpur');
    // await page.locator('#card').fill('123456789009');
    // await page.locator('#month').fill('May');
    // await page.locator('#year').fill('2003');
    await page.locator("[onclick='purchaseOrder()']").click();

})