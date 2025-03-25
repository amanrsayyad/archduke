// Loader functionality
window.addEventListener("load", function () {
  const loaderWrapper = document.querySelector(".loader-wrapper");

  // Add a small delay to ensure smooth transition
  setTimeout(() => {
    loaderWrapper.classList.add("fade-out");

    // Remove the loader from DOM after fade out
    setTimeout(() => {
      loaderWrapper.style.display = "none";
    }, 500);
  }, 500);
});

// Mobile menu toggle and accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const menu = document.querySelector(".menu");
  const companyDropdown = document.querySelector(".company-dropdown");

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

  // Accordion functionality for job listings
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    };
  }

  // FAQ accordion functionality
  var acc = document.getElementsByClassName("drop-title");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    };
  }

  // Handle company dropdown in mobile view
  if (companyDropdown) {
    const companyLink = companyDropdown.querySelector("a");

    companyLink.addEventListener("click", (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        companyDropdown.classList.toggle("active");
      }
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!companyDropdown?.contains(e.target)) {
      companyDropdown?.classList.remove("active");
    }
  });
});
