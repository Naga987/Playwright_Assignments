import {test} from '@playwright/test'

test.use({
    storageState:'./Data/sflogin.json'
});

test('login otp skip',async ({page}) => {
    
    await page.goto('https://orgfarm-1a1f5d933b-dev-ed.develop.lightning.force.com/lightning/page/home')

    await page.waitForTimeout(30000)


});