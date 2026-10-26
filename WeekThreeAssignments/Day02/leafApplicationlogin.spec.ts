import {test} from '@playwright/test'

test('LeafTab login', async ({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('//form[@id="login"]//preceding::input[@id="username"]').fill('democsr2')

    await page.locator('//form[@id="login"]//preceding::input[@id="password"]').fill('crmsfa')

    await page.locator('//form[@id="login"]//preceding::input[@value="Login"]').click()
})