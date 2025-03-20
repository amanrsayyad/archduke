var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

var acc = document.getElementsByClassName("drop-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Check if mobile menu button exists
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  if (mobileMenuBtn) {
    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener("click", function () {
      document.querySelector(".menu").classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const menu = document.querySelector(".menu");
      if (menu && mobileMenuBtn) {
        if (
          !menu.contains(event.target) &&
          !mobileMenuBtn.contains(event.target)
        ) {
          menu.classList.remove("active");
        }
      }
    });
  }
});
