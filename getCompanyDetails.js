


async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function randon_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCompanyDetails();
{
    companyLinkedinLink = "";
    const browser = await puppeteerExtra.launch(
        {
            headless: false,
            ignoreDefaultArgs: ['--enable-automation'],
        });

    const page = await browser.newPage();
    var n = randon_int(1, agent_arr.length - 1);
    var useragent = agent_arr[n];
    var n2 = randon_int(1, referer_arr.length - 1);
    var referer = referer_arr[n2];
    await page.setExtraHTTPHeaders({
        Referer: referer
    });
    await sleep(15000);
    await page.setUserAgent(useragent);
    await page.goto(companyLinkedinLink, {
        waitUntil: 'load',
    });
    await sleep(15000);
    

    
}


getCompanyDetails();




