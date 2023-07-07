import "./src/blazy";
import "./src/ga";

// Handle the mobile menu
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".js-mobile-button")
    .addEventListener("click", (event) =>
      event.target.nextElementSibling.classList.toggle("hidden")
    );
});
