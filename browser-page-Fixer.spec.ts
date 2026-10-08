import {chromium, test} from '@playwright/test'

test('learn to launch the browser', async () =>{

    let browser = await chromium.launch()
    let browserContext = await browser.newContext()
    let page = await browserContext.newPage()

    await page.goto("https://www.amazon.co.uk/")

    const url = page.url()

    console.log(url);

    await page.waitForLoadState('domcontentloaded')

    const Title = await page.title()

    console.log(Title);
    


    
})