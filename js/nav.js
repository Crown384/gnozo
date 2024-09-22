const bnavs = document.querySelectorAll(".bnav");
const footer = document.querySelector("footer");
const search = document.getElementById("search");
const about = document.getElementById("about");
const sectionsNav = document.querySelectorAll("section");

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  if (e.target.classList.contains('about') || e.target.classList.contains('home')) {
    console.log("body evetF");
    searchInput.value = "";
    searchResults.innerHTML = "";
  }
});

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
      searchGroups.classList.remove('hidden');
      footer.querySelector('.home').classList.remove("active");
      footer.querySelector('.about').classList.remove("active");
      // REAL ONE TO BE SHOWN
      search.classList.remove("hidden");
      search.classList.add("active");
      footer.querySelector('.search').classList.add("active");

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
      footer.querySelector('.search').classList.remove("active");
      footer.querySelector('.about').classList.remove("active");
      // REAL ONE TO BE SHOWN
      main.classList.remove("hidden");
     // main.classList.add("active");
      searchInput.value = "";
      searchGroups.classList.remove('hidden');
      // e.target.classList.add("active");
      footer.querySelector('.home').classList.add("active");


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
      footer.querySelector('.search').classList.remove("active");
      footer.querySelector('.home').classList.remove("active");
      // REAL ONE TO BE SHOWN
      // about.classList.add("active");
      footer.querySelector('.about').classList.add("active");
      about.classList.remove("hidden");
    }

    window.addEventListener("popstate", () => {
      window.history.back();
    });
  });
});
