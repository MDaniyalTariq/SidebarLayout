/**
 * Loads content from a specified page into the #main-content element.
 *
 * @param {string} page - The URL of the page to load.
 * @example loadContent("/pages/about.html");
 */
function loadContent(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main-content").innerHTML = data;
    })
    .catch((error) => console.log("Error loading content:", error));
}

/**
 * Initializes the application by loading the home page content and updating the current year.
 */
document.addEventListener("DOMContentLoaded", () => {
  loadContent("pages/home.html");
  updateYear();
});

/**
 * Updates the current year element with the current year.
 *
 * @example updateYear();
 */
function updateYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
