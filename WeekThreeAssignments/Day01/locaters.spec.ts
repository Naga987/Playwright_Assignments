import {test} from '@playwright/test'

test('launch salesforse application',async({page}) => {

    page.goto("https://login.salesforce.com/?locale=in")

   await page.locator('.input.r4.wide.mb16.mt8.username').fill('dilipkumar.rajendran@testleaf.com')
   
   await page.locator('input[class=".button.r4.wide.primary"]').click()

   await page.locator('.input.r4.wide.mb16.mt8.password').fill('TestLeaf@2025')

   page.waitForTimeout(5000)

   await page.locator("text=Leads").first().click()

   page.waitForTimeout(5000)
    
})