const {test, expect, request} = require('@playwright/test');
const { asyncWrapProviders } = require('async_hooks');
const loginPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
let token;
test.beforeEach( async ()=>
{
    const apiContext = await request.newContext();
    const loginResponse= await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
            data: loginPayload
        });

        //My updated Repo for practice

        
// console.log(await loginResponse.json());
    // expect(loginResponse.ok()).tobeTruthy();
    const loginResponsejson = await loginResponse.json();
    const token= loginResponsejson.token;
    console.log(token);


});


test('API login', async ({page})=>
{   
    
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    }, token);
    const email="";
    await page.goto('https://rahulshettyacademy.com/client/');
    // await page.locator('#userEmail').fill(email);
    // await page.locator('#userPassword').fill(pass);
    // await page.locator('#login').click();
    await page.pause;
    // await page.pause();
    // const email = "anshika@gmail.com";
    // const pass = "Iamking@000";
    const products = page.locator('.card-body');
    const productName = "iphone 13 pro";
    await page.waitForLoadState('networkidle');
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if(await products.nth(i).locator('b').textContent()===productName){
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
        
    }
    // await page.locator("[routerlink='/dashboard/cart']").click();
    // await page.locator('text=Buy Now').click();
    // await page.locator('.input txt text-validated').first().fill('4542 9931 9292 2293');
    // await page.locator('select.input ddl').first().selectOption(4);
    // await page.locator('select.input ddl').last().selectOption(4);
    





});
