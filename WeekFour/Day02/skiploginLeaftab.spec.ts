import {expect, test} from '@playwright/test'
import { log } from 'node:console';

test('skep login for leaftab', async ({page}) => {

    console.log('https://leaftaps.com/opentaps/control/main');

    let url = page.url()

    console.log(url);
    
    //await expect(page.url()).toBe('https://leaftaps.com/opentaps/control/main');

    let pageTitle = page.title()

    console.log(pageTitle);

   // expect(page.title).toBe('Leaftaps -TestLeaf Automation')


    
    
})