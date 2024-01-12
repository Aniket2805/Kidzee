// Cache the navigation element and its initial offset
var nav = document.getElementById("nav");
var navLinks = document.querySelectorAll(".nav-link");
var sticky = document.getElementById("sticky");
var stickyHeaderTop = nav.offsetTop;

// Function to handle scroll events
function handleScroll() {
  // Check if the scroll position is below the sticky header
  if (window.scrollY > stickyHeaderTop) {
    // Apply styles for sticky header
    nav.style.position = "fixed";
    nav.style.top = "0px";
    nav.style.zIndex = "999";
    nav.style.backgroundColor = "#65318e";
    nav.style.color = "white";

    // Toggle class for navigation links
    navLinks.forEach(function (link) {
      link.classList.remove(".white");
      link.style.color = "white";
    });
    // Display the sticky element
    sticky.style.display = "block";
  } else {
    // Apply styles for non-sticky header
    nav.style.position = "static";
    nav.style.backgroundColor = "white";
    nav.style.color = "black";

    // Remove class and set color for navigation links
    navLinks.forEach(function (link) {
      link.classList.remove(".white");
      link.style.color = "black";
    });

    // Hide the sticky element
    sticky.style.display = "none";
  }
}

// Attach the handleScroll function to the scroll event
window.onscroll = handleScroll;
