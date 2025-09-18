const {test, expect} = require('@playwright/test');

test('First PW test', async ({browser}){
    const context=browser.newContext();
    const page = await context.newPage();
    
});