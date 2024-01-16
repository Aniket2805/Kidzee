var nav = document.getElementById("nav");
var navwh = document.getElementsByClassName("white");
var navLinks = document.querySelectorAll(".nav-link");
var sticky = document.getElementById("sticky");
var stickyHeaderTop = nav.offsetTop;

// Function to handle scroll events
function handleScroll() {
  if (window.scrollY > stickyHeaderTop) {
    nav.classList.remove("white");
    nav.style.position = "fixed";
    nav.style.top = "0px";
    nav.style.zIndex = "999";
    nav.style.backgroundColor = "#65318e";
    navLinks.forEach(function (link) {
      link.style.color = "white";
    });
    sticky.style.display = "block";
  } else {
    nav.style.position = "static";
    nav.style.background = "transparent";
    sticky.style.display = "none";
  }
}
window.onscroll = handleScroll;
function myFunction() {
  if (document.getElementById("nav-tog").classList.contains("collapsed")) {
    document.getElementById("nav").style.background = "transparent";
    document.getElementById("head").style.display = "block";
  } else {
    document.getElementById("nav").style.backgroundColor = "#65318e";
    document.getElementById("head").style.display = "none";
  }
}
