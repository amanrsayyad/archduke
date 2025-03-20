// Mobile menu toggle and accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const menu = document.querySelector(".menu");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
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
});
