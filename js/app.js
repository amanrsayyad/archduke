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

// Testimonial slider functionality
const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".testimonial-dots");

let currentIndex = 0;
const cardsPerSlide = window.innerWidth <= 991 ? 1 : 2;
const totalSlides = Math.ceil(testimonialCards.length / cardsPerSlide);

// Create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(currentIndex);
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto slide
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto slide on hover
testimonialTrack.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

testimonialTrack.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Handle window resize
window.addEventListener("resize", () => {
  const newCardsPerSlide = window.innerWidth <= 991 ? 1 : 2;
  if (newCardsPerSlide !== cardsPerSlide) {
    location.reload(); // Reload page to reinitialize slider with new layout
  }
});
