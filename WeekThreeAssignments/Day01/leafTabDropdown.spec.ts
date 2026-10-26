import {test} from '@playwright/test'

test('LeafTab dropdown', async ({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('democsr2')

    await page.locator('#password').fill('crmsfa')

    await page.locator('[class="decorativeSubmit"]').click()

    await page.locator('text=CRM/SFA').click()

    await page.locator("text=Leads").first().click()

    await page.locator('text=Create Lead').nth(0).click()

    let allDropdownValues = await page.locator('#createLeadForm_industryEnumId > option')

    let total_count = await allDropdownValues.count();

    console.log(total_count);

    for(let i=0; i<total_count; i++)
    {
       let values = await allDropdownValues.nth(i).innerText()
       await page.locator('#createLeadForm_industryEnumId').selectOption({value:""})
       console.log(values);
       
    }
    
})