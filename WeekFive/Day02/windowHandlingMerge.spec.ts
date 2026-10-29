import {test} from '@playwright/test'

test('merge button leaf tab application', async ({page, context}) => {

    page.goto('https://leaftaps.com/opentaps/control/main')

    let pagePromise =context.waitForEvent('page')

    let secondPagePromise = context.waitForEvent('page')

    await page.locator('#username').fill('demosalesmanager')

    await page.locator('#password').fill('crmsfa')

    await page.locator('[class="decorativeSubmit"]').click()

    await page.locator('text=CRM/SFA').click()

    await page.locator("text=Leads").first().click()

    await page.getByRole('link', {name:'Merge Lead'}).click()

    await page.locator('(//img[@src="/images/fieldlookup.gif"])[1]').click()


    let chailPage = await pagePromise

    await chailPage.waitForLoadState('domcontentloaded')
    
    let chaildPageTitle= await chailPage.title()

    let pageTitle = await page.title()

    console.log(chaildPageTitle);
    
    console.log(pageTitle);

    await chailPage.locator('(//table[@class="x-grid3-row-table"]/tbody/tr/td/div/a)[1]').nth(0).dblclick()

    //await page.bringToFront()

    await page.locator('(//img[@src="/images/fieldlookup.gif"])[2]').click()

 
   let secondChaildPage = await secondPagePromise

    await secondChaildPage.waitForLoadState('domcontentloaded')

    let secondPageTitle = await secondChaildPage.title()
    
    console.log(secondPageTitle); 
    

    await chailPage.locator('(//table[@class="x-grid3-row-table"]/tbody/tr/td/div/a)[2]').nth(1).dblclick()
    
    



    

})