import{chromium, test} from '@playwright/test'

test('launch redbus portal on edge', async ()=>{

    let edge_browser = await chromium.launch({headless: false, channel: "msedge"})
    let edge_browserContext = await edge_browser.newContext()
    let edgePage = await edge_browserContext.newPage()

    
    const webkitBrowser = await chromium.launch({headless: false, channel: "chrome"});
    const webkitContext = await webkitBrowser.newContext();
    const webkitPage = await webkitContext.newPage();
    
    await edgePage.goto("https://www.redbus.in/")

    await webkitPage.goto("https://www.flipkart.com/")

    const redBusurl = edgePage.url()

    console.log(redBusurl);

    await edgePage.waitForLoadState('domcontentloaded')

    console.log('Edge Title:', await edgePage.title());
    
})