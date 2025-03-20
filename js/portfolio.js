// Portfolio Project Filtering

document.addEventListener("DOMContentLoaded", function () {
  // Get all project cards
  const projectCards = document.querySelectorAll(".project-card");

  // Get filter buttons
  const sectorFilters = document.querySelectorAll(".sectors .btn-filter");
  const statusFilters = document.querySelectorAll(".status .btn-filter");

  // Track active filters
  let activeSectorFilter = "All projects";
  let activeStatusFilter = "All";

  // Initialize - make sure the "All projects" and "All" buttons have the correct class
  document
    .querySelector(".sectors .btn-filter:first-child")
    .classList.add("bg-filter");
  document
    .querySelector(".sectors .btn-filter:first-child")
    .classList.remove("border-filter");
  document
    .querySelector(".status .btn-filter:first-child")
    .classList.add("bg-filter");
  document
    .querySelector(".status .btn-filter:first-child")
    .classList.remove("border-filter");

  // Add click event listeners to sector filter buttons
  sectorFilters.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active sector filter
      activeSectorFilter = this.textContent.trim();

      // Update UI for sector filters
      sectorFilters.forEach((btn) => {
        btn.classList.remove("bg-filter");
        btn.classList.add("border-filter");
      });
      this.classList.remove("border-filter");
      this.classList.add("bg-filter");

      // Apply both filters
      applyFilters();
    });
  });

  // Add click event listeners to status filter buttons
  statusFilters.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active status filter
      activeStatusFilter = this.textContent.trim();

      // Update UI for status filters
      statusFilters.forEach((btn) => {
        btn.classList.remove("bg-filter");
        btn.classList.add("border-filter");
      });
      this.classList.remove("border-filter");
      this.classList.add("bg-filter");

      // Apply both filters
      applyFilters();
    });
  });

  // Apply filters function
  function applyFilters() {
    projectCards.forEach((card) => {
      const cardSector = card
        .querySelector(".project-data p")
        .textContent.trim();
      const cardStatus = card.dataset.status;

      // Check if card matches both sector and status filters
      let matchesSector = false;
      if (activeSectorFilter === "All projects") {
        matchesSector = true;
      } else if (
        activeSectorFilter === "Residential" &&
        cardSector === "Residential"
      ) {
        matchesSector = true;
      } else if (
        activeSectorFilter === "Commercial" &&
        cardSector === "Commercial"
      ) {
        matchesSector = true;
      } else if (
        activeSectorFilter === "Industrial" &&
        cardSector === "Industrial"
      ) {
        matchesSector = true;
      }

      let matchesStatus = false;
      if (activeStatusFilter === "All") {
        matchesStatus = true;
      } else if (activeStatusFilter === "Ongoing" && cardStatus === "Ongoing") {
        matchesStatus = true;
      } else if (
        activeStatusFilter === "Completed" &&
        cardStatus === "Completed"
      ) {
        matchesStatus = true;
      }

      // Show or hide card based on filter matches
      if (matchesSector && matchesStatus) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    // Check if no cards are visible and show a message if needed
    const visibleCards = document.querySelectorAll('.project-card[style=""]');
    const noResultsMessage = document.getElementById("no-results-message");

    if (visibleCards.length === 0) {
      if (!noResultsMessage) {
        const message = document.createElement("p");
        message.id = "no-results-message";
        message.textContent = "No projects match the selected filters.";
        message.style.textAlign = "center";
        message.style.marginTop = "2rem";
        message.style.fontFamily = "var(--font-roboto)";
        document.querySelector(".projects-grid").after(message);
      }
    } else if (noResultsMessage) {
      noResultsMessage.remove();
    }
  }
});
