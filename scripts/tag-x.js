// Landing page script for Tag-X
// Function to hide landing page and show about section using jQuery
const enterBtn = function () {
  // Hide elements
  $("#landing-page, #canvas").hide();

  // Show navbar
  $("#navigation").removeClass("hidden");

  // Show the about section
  $("#tag-x-intro").removeClass("hidden");
};

// Add event listener to the enter button
const enterBtnClick = function () {
  $("#enter-btn").on("click", enterBtn);
};

// Call function for event listener
enterBtnClick();

// Export functions (if using CommonJS for testing)
if (typeof module !== "undefined") {
  module.exports = {
    enterBtn,
    enterBtnClick,
  };
}

// About section script for Tag-X
const aboutSection = function () {
  // Hide elements
  $("#landing-page, #canvas").hide();

  // Show navbar
  $("#navigation").removeClass("hidden");

  // Show the about section
  $("#tag-x-intro").removeClass("hidden");
}   

$(document).ready(function () {
  $('#about-btn').on('click', function () {
    $('#carousel, #tag-x-rules, #history').removeClass('hidden');
  });
});

$(document).ready(() => {
    $('#play-tag-x-btn').on('click', function (e) {
        e.preventDefault(); // Prevent any default link behavior


        // Remove 'hidden' class from cards and enquiry form
        $('#get-involved').removeClass('hidden');

        // Smooth scroll to the card section
        $('html, body').animate({
            scrollTop: $('#get-involved').offset().top
        }, 800); // 800ms scroll duration
    });
});

$("#card-booking-btn").on("click", function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Show the enquiry form
  $("#enquiry-section").removeClass("hidden");
  
    // Smooth scroll to the enquiry section
  $('html, body').animate({
            scrollTop: $('#enquiry-section').offset().top
        }, 800); // 800ms scroll duration
    });
 
