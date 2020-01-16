// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  // wait until images, links, fonts, stylesheets, scripts, and other media assets are loaded
  window.addEventListener("load", function() {
    // GSAP custom code goes here
    var box = document.getElementById("box");
    TweenMax.to(box, 0.7, {left: 0, x: 0});
  }, false);
});
