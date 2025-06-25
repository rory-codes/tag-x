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



/** THIS STAYS AT THE END OF THE FILE 
 * ADD FUCTIONS TO EXPORT TO TEST FILE */
// Export functions 
if (typeof module !== "undefined") {
  module.exports = {
    enterBtn,
    enterBtnClick,
  };
}