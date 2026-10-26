import { test, expect } from '@playwright/test'
import { array } from 'node:stream/iter'
let web: any
test('Multiple Windows Handle approach', async ({ page, context }) => {

    await page.goto('https://www.leafground.com/window.xhtml')

    let [newPage] = await Promise.all([context.waitForEvent('page'), page.getByRole('button', { name: "Open Multiple" }).click()])

    let allpages = newPage.context().pages()

    let pageCount = allpages.length

    for (let index = 0; index < pageCount; index++) {
        await page.waitForLoadState('domcontentloaded')
        let Title = await allpages[index].title()
        console.log(Title);

        if (Title === 'Web Table') {
            web = allpages[index]
            await web.locator("//input[@class='ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-hover']").click()
        } else if (Title === 'Dashboard') {
            web = allpages[index]
            await web.locator("")
        }

    }
    /*Window
  Web Table
  Dashboard*/




})