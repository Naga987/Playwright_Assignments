import {test} from '@playwright/test'

test('alert practice test', async ({page}) => {

    page.goto('https://www.leafground.com/alert.xhtml')

    page.on('dialog', async(alert) => {

        let typeofalert = alert.type()
        console.log(typeofalert);

        if(typeofalert ==="pramot")
        {
           await alert.accept("TEST")
           // await console.log(alert.accept('TEST'));
        }
        else
        {
            await alert.accept("TEST123")
            
        }   
    })

    await page.locator('//span[text()="Show"]').first().click()

    // confirm alert
    await page.locator('//span[text()="Show"]').nth(1).click()

    //prompt alert
    await page.locator('//span[text()="Show"]').nth(4).click()

    
    
})