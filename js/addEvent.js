// Query the container that holds the buttons
const output = document.querySelector(".output");
const home = document.querySelector(".home");
const testContainer = document.querySelector(".test");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

// Set up event delegation
document.addEventListener("DOMContentLoaded", () => {
  one.addEventListener("click", (e) => {
    if (e.target.classList.contains("Rbutton")) {
      const specificResource = engineeringBooks.find((resource) => {
        return resource.title === e.target.textContent.trim();
      });
      console.log(specificResource)

      if (specificResource) {
        // Update the history state
        history.pushState(null, null, window.location.href);
        
        // Display the selected resource's title
        output.innerHTML = `${specificResource.title}`;
        
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