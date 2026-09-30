/*
let browser_name

function launchBrowser(browser_name)
{
 if(browser_name ==='Chrome'){
    console.log("Given browser is Chrome");
    }

    else if(browser_name ==='Firefox')
    {
        console.log("Given browser is Firefox");
    }
    else
    {
        console.log("It is other browser");
    }
}

launchBrowser("Opera")

*/
let test

function runTests(test)
{
    switch(test)
    {
        case 'smoke':
            console.log("given test is smoke test");
            break
        case 'sanity':
            console.log("given test is sanity");
            break
        case 'regression':
            console.log("given test is regression");
        default :
            console.log("given test is default SIT test");
             
            
    }
}

 runTests('sanity')