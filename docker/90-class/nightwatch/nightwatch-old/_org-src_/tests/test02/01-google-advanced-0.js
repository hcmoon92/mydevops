module.exports = {
    'Google advanced search : Elon Musk' : function(browser) {
        const mainQuerySelector = 'input[name="as_q"]';
        const mainQuery = 'Elon Musk';
    
        browser
            .url('http://www.google.com/advanced_search')
            .setValue(mainQuerySelector, mainQuery)
            .saveScreenshot('screenshots/test02/test02-screenshots-google-advanced.png')
    }
}
    