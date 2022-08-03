/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-nav").style.top = "0";
  } else {
    document.getElementById("main-nav").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}
