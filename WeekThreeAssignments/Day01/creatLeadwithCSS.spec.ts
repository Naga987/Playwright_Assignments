import {test} from '@playwright/test'

test('CreatLead with CSS Selectors', async ({page}) => {

    page.goto("https://leaftaps.com/opentaps/control/main")


    await page.locator('#username').fill('democsr2')

    await page.locator('#password').fill('crmsfa')

    await page.locator('[class="decorativeSubmit"]').click()

    await page.locator('text=CRM/SFA').click()

    await page.locator("text=Leads").first().click()

    await page.locator('text=Create Lead').nth(0).click()

    await page.locator('#createLeadForm_companyName').fill('TCS')

    await page.locator('[id="createLeadForm_firstName"]').fill('Kuchi')

    await page.locator('[id="createLeadForm_lastName"]').fill('Nagabhushanam')

    await page.locator('#createLeadForm_personalTitle').fill('Mr')

    await page.locator('[name="generalProfTitle"]').fill('Automation')

    await page.locator('#createLeadForm_annualRevenue').fill('2500000')

    await page.locator('#createLeadForm_departmentName').fill('IT Services')

    let alldropdownOptions = page.locator('#createLeadForm_dataSourceId > option')

    let total_dpcount = await alldropdownOptions.count()

    for(let i=0; i< total_dpcount; i++)
    {
        let values = await alldropdownOptions.nth(i).innerText()

        await page.locator('#createLeadForm_dataSourceId').selectOption({value:""})

        console.log(values);

    }

    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9043235590')

    await page.locator('[name="submitButton"]').click()

    test.setTimeout(60000);
    
})