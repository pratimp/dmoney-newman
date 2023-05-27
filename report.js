const newman = require('newman');
 
newman.run({
    //collection: require("./collection/dMoney.json"),
    collection:'https://api.postman.com/collections/26017547-b396eb81-b08a-4ff7-8586-ab1306a780cf?access_key=PMAT-01H1DQJJT9TETW8KHNJGFTS55H',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Report/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});