//Call Back function with setTimeout method


let browser = "Chrome:154.0.8037.93"

function checkBrowserVersion() {

    callbackfunction()
}

function callbackfunction() {
    console.log("waiting for data from a server");
    setTimeout(() => {
        console.log("Browser using callback", browser);
    }, 2000);
}


checkBrowserVersion()