const puppeteer = require('puppeteer')


(async () => {
    try{
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        const htmlContent = `
            <body>
                <h1>Teste</h1>
            </body>
        `

        await page.setContent(htmlContent)
        await page.pdf({ path: 'mypdf.pdf', format: 'A4'})

        console.log('done')

        await browser.close()
        
    }catch(e){
        console.log(e);
    }
})()