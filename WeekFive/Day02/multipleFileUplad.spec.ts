import {test, expect} from '@playwright/test'

import fs from 'fs';

import path from 'path';

test('multiple file upload',async ({page}) => {

    page.goto('https://www.leafground.com/file.xhtml')

    let fileUpload = page.locator('(//input[@type="file"])[2]').setInputFiles([

        path.join("C:/playwright-automation/Data/TestLeaf Logo.png"),
        path.join("C:/playwright-automation/Data/TestLeaf.png")

    ]);

    

    await page.waitForTimeout(5000)
    
    


    
})