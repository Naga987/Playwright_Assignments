import {test, expect} from '@playwright/test'

test('assertions', async ({page}) => {

    await page.goto('https://leafground.com/input.xhtml')

   let disabled_tab = await page.locator('//input[@class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-disabled"]')

   await expect(disabled_tab).toBeDisabled()

   let enable_tab = await page.locator('(//div[@class="grid formgrid"]/div/input[@class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all"])[1]')
   
   await expect(enable_tab).toBeEditable()
   
   await page.locator('(//div[@class="grid formgrid"]/div/input[@class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all"])[1]').fill("Naga")

   



})