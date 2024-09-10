const output = document.querySelector(".output");
document.addEventListener("DOMContentLoaded", LoadContentToButtons);

const LoadContentToButtons = () => {
  generateEventListener(one);
  generateEventListener(two);
  generateEventListener(three);
};

function generateEventListener(contain) {
  contain.addEventListener("click", (e) => {
    if (e.target.classList.contains("Rbutton")) {
      const specificResource = engineeringBooks.find((resource) => {
        return resource.title === e.target.textContent;
      });

      // No need to add another click event listener, just handle the logic here
      history.pushState(null, null, window.location.href);
      output.innerHTML = `${specificResource.title}`;
      home.classList.add("hidden");
      output.classList.remove("hidden");

      window.addEventListener("popstate", () => {
        home.classList.remove("hidden");
        output.classList.add("hidden");
      });
    }
  });
}
