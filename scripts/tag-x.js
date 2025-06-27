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

// Nav links click handler
// Generic navbar click handler
$('#navigation a').on('click', function (e) {
  e.preventDefault();

  const targetId = $(this).attr('href');  // e.g., "#get-involved" or "#tag-x-intro"
  const $target = $(targetId);

  if ($target.length) {
    // Unhide the section and any necessary parent containers
    $target.removeClass('hidden');

    // Special cases for nested or related visibility
    if (targetId === '#get-involved') {
      // Optional: Unhide anything wrapping or related to this section
      $('#enquiry-section').removeClass('hidden'); // if needed
    }

    if (targetId === '#tagx-carousel') {
      $('#tagx-carousel').removeClass('hidden');
    }

    if (targetId === '#tag-x-adults') {
      $('#get-involved').removeClass('hidden');
    }

    // Scroll to the target section
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 800);
  } else {
    console.warn('Target section not found:', targetId);
  }
});

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
    $('#tagx-carousel, #tag-x-rules, #history, #get-involved').removeClass('hidden');

    // Smooth scroll to the about section
    $('html, body').animate({
            scrollTop: $('#tagx-carousel').offset().top
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

// Dynamic content for adult card 

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

// Dynamic content for junior card
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

  // Enquiry form script for Tag-X
  // Card button to determine options for juniors on form
  $('#card-booking-btn-jnr').click(function () {
    // Hide adult options
    $('.adult-option').hide();

    // Show junior options
    $('.junior-option').show();

    // Show the enquiry section if it's hidden
    $('#enquiry-section').removeClass('hidden');


    // Smooth scroll to the enquiry form
    $('html, body').animate({
      scrollTop: $('#enquiry-section').offset().top
    }, 600);
  });

  // Card button to determine options for adults on form
  $('#card-booking-btn').click(function () {
    // Hide junior options
    $('.junior-option').hide();

    // Show adult options
    $('.adult-option').show();

    // Show the enquiry section if it's hidden
    $('#enquiry-section').removeClass('hidden');

    // Smooth scroll to the enquiry form
    $('html, body').animate({
      scrollTop: $('#enquiry-section').offset().top
    }, 600);
  });

  // Javascript for carousel
$(document).ready(function () {
  const $track = $('#tagx-carousel .carousel-track');
  const $slides = $('#tagx-carousel .carousel-img');
  const slideCount = $slides.length;
  let currentIndex = 0;
  let interval;

  function goToSlide(index) {
    $track.css('transform', `translateX(-${index * 100}%)`);
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slideCount;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(prevIndex);
  }

  function startAutoScroll() {
    interval = setInterval(nextSlide, 4000);
  }

  function stopAutoScroll() {
    clearInterval(interval);
  }

  startAutoScroll();

  $('#tagx-carousel .carousel-btn.next').click(function () {
    stopAutoScroll();
    nextSlide();
    startAutoScroll();
  });

  $('#tagx-carousel .carousel-btn.prev').click(function () {
    stopAutoScroll();
    prevSlide();
    startAutoScroll();
  });

  $('#tagx-carousel').hover(stopAutoScroll, startAutoScroll);
});

// Form validaition script for Tag-X

$('#enquiry-form').on('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;
    let errorMessages = [];

    // Reset all styles
    $('#enquiry-form input, #enquiry-form select').css('border', '');

    const name = $('#name').val().trim();
    const contact = $('#contact').val().trim();
    const email = $('#email').val().trim();
    const selectedOption = $('select.form-select:visible').val(); // Updated selector

    // Validate name
    if (!name) {
      isValid = false;
      $('#name').css('border', '2px solid red');
      errorMessages.push('Full name is required.');
    }

    // Validate contact
    const contactRegex = /^[0-9]{7,15}$/;
    if (!contact || !contactRegex.test(contact)) {
      isValid = false;
      $('#contact').css('border', '2px solid red');
      errorMessages.push('Please enter a valid contact number.');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      isValid = false;
      $('#email').css('border', '2px solid red');
      errorMessages.push('Please enter a valid email address.');
    }

    // Validate visible dropdown
    if (!selectedOption) {
      $('select.form-select:visible').css('border', '2px solid red');
      isValid = false;
      errorMessages.push('Please select a venue and time.');
    }

    if (isValid) {
      alert('Form submitted successfully!');
      // Add actual submission or AJAX here
    } else {
      alert(errorMessages.join('\n'));
    }
  });
