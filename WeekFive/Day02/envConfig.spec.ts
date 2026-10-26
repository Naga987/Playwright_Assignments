import {test} from '@playwright/test'

import dotenv from 'dotenv'

let filename=process.env.envfile || 'prod' || 'qa'

dotenv.config({ path: `Data/{qa.env}` });

let URL=process.env.lf_url as string
let Username=<string>process.env.lf_username
let Password=process.env.lf_password!

test(`learn to read data from Env file`, async ({page}) => {

await page.goto(URL)

await page.locator('#username').fill(Username)
await page.locator('#password').fill(Password)

await page.locator('.decorativeSubmit').click()
})