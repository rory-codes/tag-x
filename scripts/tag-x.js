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

// Export functions 
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

//About section button script for Tag-X
$('#about-btn').on('click', function () {
    $('#carousel, #tag-x-rules, #history, #get-involved').removeClass('hidden');

    // Smooth scroll to the about section
    $('html, body').animate({
            scrollTop: $('#tag-x-rules').offset().top
        }, 800); // 800ms scroll duration
 });

 // Play Tag-X button script for Tag-X

$('#play-tag-x-btn').on('click', function (e) {
    e.preventDefault(); // Prevent any default link behavior

        // Remove 'hidden' class from cards and enquiry form
    $('#get-involved').removeClass('hidden');

        // Smooth scroll to the card section
    $('html, body').animate({
            scrollTop: $('#get-involved').offset().top
    }, 800); // 800ms scroll duration
});


// Enquiry form script for Tag-X
$("#card-booking-btn").on("click", function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Show the enquiry form
  $("#enquiry-section").removeClass("hidden");
  
    // Smooth scroll to the enquiry section
  $('html, body').animate({
            scrollTop: $('#enquiry-section').offset().top
        }, 800); // 800ms scroll duration
    });
 
//Junior booking button script for Tag-X
$("#card-booking-btn-jnr").on("click", function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Show the enquiry form
  $("#enquiry-section").removeClass("hidden");
  
    // Smooth scroll to the enquiry section
  $('html, body').animate({
            scrollTop: $('#enquiry-section').offset().top
        }, 800); // 800ms scroll duration
    });

// Rules section script for Tag-X
 // Initially hide all rule lists
  $('#tag-x-rules ul').addClass('rules-hidden');

  // Toggle visibility of the <ul> when the corresponding <h3> is clicked
  $('#tag-x-rules h3').on('click', function () {
    const $nextList = $(this).next('ul');
    
    // Toggle only the clicked rule's content
    $nextList.slideToggle().toggleClass('rules-hidden');
  });

  // Change text color on hover for rules section
  
  $('#tag-x-rules p, #tag-x-rules li').hover(
    function () {
      // Mouse enter: change text color to white
      $(this).css('color', '#ffffff');
    },
    function () {
      // Mouse leave: revert text color to inherited/default
      $(this).css('color', '');
    }
  );


  //History section script for Tag-X
  // Initially hide all <ul> elements in #history
  $('#history ul').addClass('history-hidden');

  // Toggle visibility when an <h3> is clicked
  $('#history h3').on('click', function () {
    const $nextList = $(this).next('ul');
    
    // Toggle the class and slide animation
    $nextList.slideToggle(300).toggleClass('history-hidden');
  });

 // Change text color on hover for history section
  
  $('#history p, #history li').hover(
    function () {
      // Mouse enter: change text color to white
      $(this).css('color', '#ffffff');
    },
    function () {
      // Mouse leave: revert text color to inherited/default
      $(this).css('color', '');
    }
  );

   // Play Tag-X button script for Tag-X
  // Prevent any default link behavior
$('#play-tag-x-btn-2').on('click', function (e) {
    e.preventDefault();
  // Remove 'hidden' class from cards and enquiry form
    $('#get-involved').removeClass('hidden');

        // Smooth scroll to the card section
    $('html, body').animate({
            scrollTop: $('#get-involved').offset().top
    }, 400); // 800ms scroll duration
});

// Card section script for Tag-X

// Add dynamic cotent for adult card 

$('#venue-times-btn-adults').click(function () {
    $('#tag-x-adults .card-extra-info-adult').html(`
      <p><strong>Tandridge secondary school:</strong> Thursday: 6.00-7.30PM.</p>
      <p><strong>Tandrige rugby club:</strong> Tuesday: 6.30-8.00PM.</p>
    `);
  });

  $('#prices-btn-adults').click(function () {
    $('#tag-x-adults .card-extra-info-adult').html(`
      <p>8 weeks <strong>£75.</strong> The first session is <strong>Free</strong>. Leave your details below and someone will be in touch!</p>
    `);
  });

// Add dynamic content for junior card
$('#venue-times-btn').click(function () {
    $('.card-extra-info').html(`
      <p><strong>Tandridge primary school:</strong> Monday 3-4PM.</p>
      <p><strong>Tandridge secondary school:</strong> Wednesday 4-5PM.</p>
      <p><strong>Tandridge secondary school:</strong> Thursday 5-6PM.</p>
    `);
  });

  $('#prices-btn').click(function () {
    $('.card-extra-info').html(`
      <p>8 weeks <strong>£75.</strong> The first session is <strong>Free</strong>. Leave your details below and someone will be in touch!</p>
    `);
  });

  