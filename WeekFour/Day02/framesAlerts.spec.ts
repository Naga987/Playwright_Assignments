import {test, expect} from '@playwright/test'

test('frames and alerts practice', async ({page}) => {

    page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    page.on('dialog', async(alert) =>
    {
        let alertType = alert.type()
        console.log(alertType)
        let alertMessage = alert.message()
        console.log(alertMessage)
        await alert.accept()

    })

    await page.frameLocator('//iframe[@id="iframeResult"]').locator('//button[@onclick="myFunction()"]').click()   
    let demo = page.frameLocator('//iframe[@id="iframeResult"]').locator('[id="demo"]')

    await expect(demo).toHaveText("You pressed OK!")
})