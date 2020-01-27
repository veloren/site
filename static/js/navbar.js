(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector("#navbar-hamburger-menu");
    var navContent = document.querySelector("#navbar-content-section");

    function toggleMobileMenu() {
      navContent.classList.toggle("nav-content-hidden");
    }

    menuButton.onclick = toggleMobileMenu;
  }, false);
}());
