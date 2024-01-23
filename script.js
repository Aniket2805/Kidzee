// Cache the navigation element and its initial offset
var nav = document.getElementById("nav");
var navwh = document.getElementsByClassName("white");
var navLinks = document.querySelectorAll(".nav-link");
var sticky = document.getElementById("sticky");
var stickyHeaderTop = nav.offsetTop;
var logo = document.getElementById("logo");
// Function to handle scroll events
function handleScroll() {
  if (window.scrollY > stickyHeaderTop) {
    logo.src = "/logo2.png";
    nav.classList.remove("white");
    nav.style.position = "fixed";
    nav.style.top = "0px";
    nav.style.zIndex = "999";
    nav.style.backgroundColor = "#65318e";
    navLinks.forEach(function (link) {
      link.style.color = "white";
    });
    // Display the sticky element
    sticky.style.display = "block";
  } else {
    // Apply styles for non-sticky header
    logo.src = "/logo.png";
    nav.style.position = "static";
    nav.style.backgroundColor = "white";
    navLinks.forEach(function (link) {
      link.style.color = "black";
    });
    // Hide the sticky element
    sticky.style.display = "none";
  }
}

// Attach the handleScroll function to the scroll event
window.onscroll = handleScroll;
