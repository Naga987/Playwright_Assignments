import {test, expect} from '@playwright/test'

test('Leafground window handle', async ({page, context}) => {

    await page.goto("https://www.leafground.com/window.xhtml")

    let pagePromise =context.waitForEvent('page')

    await page.locator("//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only mr-2 mb-2']//span").click()

   
    let chailPage = await pagePromise

    await chailPage.waitForLoadState('domcontentloaded')
    
    let chaildPageTitle= await chailPage.title()

    let pageTitle = await page.title()

    console.log(chaildPageTitle);
    
    console.log(pageTitle);

    await chailPage.locator('//input[@id="email"]').click()

    await chailPage.locator('//input[@id="email"]').fill('kuchi.naga@gmail.com')

    await chailPage.locator('//textarea[@id="message"]').click()

    await chailPage.locator('//textarea[@id="message"]').fill('Playwright window handling')

    await page.bringToFront()
})