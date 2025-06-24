/** 
 * @jest-environment jsdom
 */

//Import the function to be tested
const {  } = require('../tag-x');

//Test environment + Load HTML
beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf8');
    document.body.innerHTML = fileContents;
});

test ('Jest should pass 1 test', () => {
    expect(1 + 1).toBe(2);
});