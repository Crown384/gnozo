// Query the container that holds the buttons
const output = document.querySelector(".output");
const home = document.querySelector(".home");
const testContainer = document.querySelector(".test");

// Set up event delegation
document.addEventListener("DOMContentLoaded", () => {
  testContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("Rbutton")) {
      const specificResource = engineeringBooks.find((resource) => {
        return resource.title === e.target.textContent.trim();
      });

      if (specificResource) {
        // Update the history state
        history.pushState(null, null, window.location.href);
        
        // Display the selected resource's title
        output.innerHTML = `<p>${specificResource.title}</p>`;
        
        // Hide the home container and show the output container
        home.classList.add("hidden");
        output.classList.remove("hidden");

        // Handle back navigation
        window.addEventListener("popstate", () => {
          home.classList.remove("hidden");
          output.classList.add("hidden");
        });
      }
    }
  });
});