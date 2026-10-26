import {test} from '@playwright/test'

import {parse} from "csv-parse/sync"

import fs from 'fs';

import path from 'path';

//let value:any=parse(fs.readFileSync('../Data/data.csv','utf-8'),{columns:true,skip_empty_lines:true})

let value: any = parse(fs.readFileSync(path.join(__dirname, '../../../Data/data.csv')),{columns:true,skip_empty_lines:true})
test.describe.serial(`run the test in serial mode`, async () => {
    
for(let credentials of value) {
    
test(`learn to read data from JSON file ${credentials.tcid}`, async ({page}) => {

await page.goto('https://login.salesforce.com/?locale=eu')

await page.locator('//input[@id="username"]').fill('kuchi.naga.88d915038985@agentforce.com')

await page.locator('//input[@class="button r4 wide primary"]').click()

await page.locator('//input[@class="input r4 wide mb16 mt8 password"]').fill('Naga@2026')

await page.locator('//input[@class="button r4 wide primary"]').click()

})

}

})