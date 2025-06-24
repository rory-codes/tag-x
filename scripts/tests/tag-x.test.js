/** 
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

//Import the function to be tested
const {  } = require('../tag-x');

//Test environment + Load HTML
beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf8');
    document.body.innerHTML = fileContents;
});

//Creates mock HTML to run before each test
beforeEach(() => {
    document.body.innerHTML = ``;

});