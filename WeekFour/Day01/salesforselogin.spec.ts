import { test } from '@playwright/test'

test('login salesforse skip otp', async ({ page }) => {

   page.goto('https://login.salesforce.com/')

   await page.locator('//input[@id="username"]').fill('kuchi.naga.88d915038985@agentforce.com')

   await page.locator('//input[@class="button r4 wide primary"]').click()

   await page.locator('//input[@class="input r4 wide mb16 mt8 password"]').fill('Naga@2026')

    await page.locator('//input[@class="button r4 wide primary"]').click()

    await page.waitForTimeout(20000)
    
    await page.context().storageState({path:'Data/sflogin.json'})

  await page.goto('https://orgfarm-1a1f5d933b-dev-ed.develop.lightning.force.com/lightning/page/home')



  await page.locator('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click()

  await page.locator('//lightning-button[@class="slds-button slds-p-horizontal--small"]//button').click()

  await page.locator('//div[@class="slds-grid slds-grid_pull-padded slds-wrap app-dnd-identifier"]//following::one-app-launcher-app-tile[@data-name="Sales"]').click()

  await page.locator('//one-app-nav-bar-item-root[@data-id="Lead"]').click()

  await page.locator('//div[@class="fix_button-group-flexbox"]//ancestor::button[@name="New"]').click()



})