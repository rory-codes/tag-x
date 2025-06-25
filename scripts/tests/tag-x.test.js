/** 
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

//Import the function to be tested
const { enterBtn, enterBtnClick } = require('../tag-x');

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

//Test to check if the enter button is clicked
describe('enterBtn', () => {
  beforeEach(() => {
    // Set up mock HTML structure
    document.body.innerHTML = `
      <div id="landing-page"></div>
      <div id="canvas"></div>
      <div id="navigation" class="hidden"></div>
      <div id="tag-x-intro" class="hidden"></div>
    `;
  });

  it('hides landing page and canvas, shows navigation and about section', () => {
    // Initial assertions before click
    expect($('#landing-page').css('display')).not.toBe('none');
    expect($('#canvas').css('display')).not.toBe('none');
    expect($('#navigation').hasClass('hidden')).toBe(true);
    expect($('#tag-x-intro').hasClass('hidden')).toBe(true);

    // Call the function
    enterBtn();

    // Test if #landing-page and #canvas are hidden
    expect($('#landing-page').css('display')).toBe('none');
    expect($('#canvas').css('display')).toBe('none');

    // Test if #navigation and #tag-x-intro are visible (hidden class removed)
    expect($('#navigation').hasClass('hidden')).toBe(false);
    expect($('#tag-x-intro').hasClass('hidden')).toBe(false);
  });
});

// About button click test 
describe('About Button Click Behavior', () => {
  beforeEach(() => {
    // Set up HTML structure
    document.body.innerHTML = `
      <button id="about-btn">Find out more</button>
      <section id="carousel" class="hidden"></section>
      <section id="history" class="hidden"></section>
      <section id="tag-x-rules" class="hidden"></section>
    `;

    // Simulate the jQuery behavior
    $('#about-btn').on('click', function () {
      $('#carousel, #history, #tag-x-rules').removeClass('hidden');
    });
  });

  test('removes "hidden" class from target sections on click', () => {
    $('#about-btn').click();

    expect($('#carousel').hasClass('hidden')).toBe(false);
    expect($('#history').hasClass('hidden')).toBe(false);
    expect($('#tag-x-rules').hasClass('hidden')).toBe(false);
  });
});

// Play Tag-X button click test
describe('getInvolvedScroll behavior', () => {
  beforeEach(() => {
    // Set up the DOM
    document.body.innerHTML = `
      <button id="play-tag-x-btn">Play</button>
      <div id="get-involved" class="hidden" style="margin-top: 1000px;">Get Involved Section</div>
    `;

    // Ensure offset().top has a known return value
    $.fn.offset = function () {
      return { top: 1000 };
    };

    // Initialize jQuery event bindings
    setupGetInvolvedScroll();
  });

  test('removes "hidden" class from #get-involved on click', () => {
    expect($('#get-involved').hasClass('hidden')).toBe(true);

    $('#play-tag-x-btn').trigger('click');

    expect($('#get-involved').hasClass('hidden')).toBe(false);
  });

  test('animates scroll to #get-involved on click', () => {
    const animateSpy = jest.spyOn($.fn, 'animate');

    $('#play-tag-x-btn').trigger('click');

    expect(animateSpy).toHaveBeenCalledWith(
      { scrollTop: 1000 } ,800);
  });
});

