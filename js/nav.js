const bnavs = document.querySelectorAll(".bnav");
const footer = document.querySelector("footer");
const search = document.getElementById("search");
const about = document.getElementById("about");
const sectionsNav = document.querySelectorAll("section");

window.addEventListener("popstate", () => {
  window.history.back();
});

document.addEventListener("DOMContentLoaded", () => {
  footer.addEventListener("click", (e) => {
    // history.pushState(null, null, window.location.href);

    // });

    if (e.target.classList.contains("search")) {
      history.pushState(null, null, window.location.href);
      main.classList.add("hidden");
      about.classList.add("hidden");
      sectionsNav.forEach((section) => {
        section.classList.add("hidden");
      });
      // REAL ONE TO BE SHOWN
      search.classList.remove("hidden");

      window.addEventListener("popstate", () => {
        window.history.back();
      });
    } else if (e.target.classList.contains("home")) {
      history.pushState(null, null, window.location.href);
      search.classList.add("hidden");
      about.classList.add("hidden");
      sectionsNav.forEach((section) => {
        section.classList.add("hidden");
      });
      // REAL ONE TO BE SHOWN
      main.classList.remove("hidden");

      window.addEventListener("popstate", () => {
        window.history.back();
      });
    } else if (e.target.classList.contains("about")) {
      history.pushState(null, null, window.location.href);
      main.classList.add("hidden");
      search.classList.add("hidden");
      sectionsNav.forEach((section) => {
        section.classList.add("hidden");
      });
      // REAL ONE TO BE SHOWN
      about.classList.remove("hidden");
    }

    window.addEventListener("popstate", () => {
      window.history.back();
    });
  });
});
