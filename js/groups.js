const searchGroups = document.querySelector(".searchGroups");
const groups = document.querySelectorAll(".groups");
const groupsOutput = document.getElementById("groupsOutput");

searchGroups.addEventListener("click", (e) => {
  if (e.target.classList.contains("groups")) {
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    second.innerHTML = ``;
    first.innerHTML = ``;

    // first = ``;
    // second = ``;
    engineeringBooks.forEach((resource, index) => {
      if (resource.keywords.includes(e.target.textContent.toLowerCase())) {
        history.pushState(null, null, window.location.href);

        if (index % 2 === 0) {
          first.innerHTML += `<span class="text-break">${resource.title}</span>`;
        } else if (index % 2 !== 0) {
          second.innerHTML += `<span class="text-break">${resource.title}</span>`;
        }
      }
    });
    console.log(main.classList);

    search.classList.add("hidden");
    groupsOutput.classList.remove("hidden");

    window.addEventListener("popstate", () => {
      sectionsNav.forEach((section) => {
        section.classList.add("hidden");
      });
      search.classList.remove("hidden");
      groupsOutput.classList.add("hidden");
      main.classList.add("hidden");
    });
  }
});
