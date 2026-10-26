import {test} from '@playwright/test'

test('leaftaps application for storageState', async ({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('democsr2')

    await page.locator('#password').fill('crmsfa')

    await page.locator('[class="decorativeSubmit"]').click()

    test.setTimeout(80000)
    
})
