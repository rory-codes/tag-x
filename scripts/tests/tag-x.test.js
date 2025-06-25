/** 
 * @jest-environment jsdom
 */

const $ = require("jquery");
global.$ = $;

//Import the function to be tested
const { 
    enterBtn, 
    enterBtnClick,
 } = require('../tag-x');

//Test environment + Load HTML
beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf8');
    document.body.innerHTML = fileContents;
    enterBtnClick();
});

//Test to check if the enter button is clicked
describe('enterBtn', () => {
    test('hide landing page and canvas, and show main', () => {

    enterBtn();

    // Test if #landing-page and #canvas are hidden
    expect($('#landing-page').css('display')).toBe('none');
    expect($('#canvas').css('display')).toBe('none');

    // Test if #navigation and #tag-x-intro are visible (hidden class removed)
    expect($('#navigation').hasClass('hidden')).toBe(false);
    expect($('#tag-x-intro').hasClass('hidden')).toBe(false);
  });
});
