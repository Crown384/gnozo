const form = document.querySelector("form");
const searchResults = document.getElementById("searchResults");
const searchInput = document.getElementById("searchInput");
// const searchGroups = document.querySelector(".searchGroups");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form);
});

function searchResource() {
  const searchQuery = searchInput.value.toLowerCase().trim(); // Trim leading/trailing spaces

  // Clear previous results
  searchResults.innerHTML = "";

  if (!searchQuery) {
    return; // No need to filter or render if search query is empty
  }

  // Split the search query into individual terms at spaces
  const searchTerms = searchQuery.split(/\s+/);

  // Filter items by exact match of search terms
  let filteredSearchItems = engineeringBooks.filter((item) => {
    const itemKeywords = item.keywords || [];
    return searchTerms.some((term) =>
      itemKeywords.includes(term.toLowerCase())
    );
  });

  // Sort the filtered items based on the number of matched keywords in descending order
  filteredSearchItems.sort((a, b) => {
    const aMatchCount = a.keywords.filter((keyword) =>
      searchTerms.includes(keyword.toLowerCase())
    ).length;
    const bMatchCount = b.keywords.filter((keyword) =>
      searchTerms.includes(keyword.toLowerCase())
    ).length;
    return bMatchCount - aMatchCount;
  });

  // Render search results (adapt HTML structure as needed)
  searchResults.innerHTML = filteredSearchItems
    .map((item) => {
      // const formattedTitle = item.title.toLowerCase().replace(/\s+/g, "-");
      return `
       <div class="container searchReturnItem">
      <div class="row col-12">
        <h4 class="mt-4 resourceTitle text-break">${item.title}</h4>
      </div>
    </div>
      `;
    })
    .join("");

  const resourceTitles = document.querySelectorAll(".resourceTitle");

  resourceTitles.forEach((resourceTitle) => {
    resourceTitle.addEventListener("click", () => {
      // const specifyMaterial = engineeringBooks.find((resource) => {
      //   return e.target.textContent === resource.title;

      const specifyMaterial = engineeringBooks.find((specificR) => {
        return specificR.title === resourceTitle.textContent;
      });

      console.log(specifyMaterial);
      history.pushState(null, null, window.location.href);
      output.innerHTML = `
      <div class="container">
              <div class="row col-12">
                  <h4 class="mt-4 resourceTitle">${specifyMaterial.title}</h4>
              </div>

              <div class="row col-12 mb-2">
                  <span class="diplay-5"
                  ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                  >
                      <path
                      d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z"
                      />
                  </svg>
                  ${specifyMaterial.author}</span
                  >
              </div>

              <div class="row col-12">
                  <div class="icons">
                  <!-- ADD TO FAVORITE ICON -->
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                  >
                      <path
                      d="M460-460v140q0 8.5 5.76 14.25t14.27 5.75q8.51 0 14.24-5.75T500-320v-140h140q8.5 0 14.25-5.76t5.75-14.27q0-8.51-5.75-14.24T640-500H500v-140q0-8.5-5.76-14.25T479.97-660q-8.51 0-14.24 5.75T460-640v140H320q-8.5 0-14.25 5.76T300-479.97q0 8.51 5.75 14.24T320-460h140Zm20.13 340q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                  </svg>

                  <!-- PREVIEW ICON -->
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                  >
                      <path
                      d="M480.18-353.85q60.97 0 103.47-42.68t42.5-103.65q0-60.97-42.68-103.47t-103.65-42.5q-60.97 0-103.47 42.68t-42.5 103.65q0 60.97 42.68 103.47t103.65 42.5ZM480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.11 152q-129.96 0-236.88-70.73Q136.31-381.46 83.08-500q53.23-118.54 160.04-189.27T479.89-760q129.96 0 236.88 70.73Q823.69-618.54 876.92-500q-53.23 118.54-160.04 189.27T480.11-240ZM480-500Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
                      />
                  </svg>

                  <!-- DOWNLOAD ICON -->
                  <a
                      href="/assets/images/space1.avif"
                      download="${specifyMaterial.title} by ${specifyMaterial.author} from GNOZO COT IKOLE.${specifyMaterial.fileType}"
                  >
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                      >
                      <path
                          d="M320-300h320q8.5 0 14.25-5.76t5.75-14.27q0-8.51-5.75-14.24T640-340H320q-8.5 0-14.25 5.76T300-319.97q0 8.51 5.75 14.24T320-300Zm140-204.77-69.85-69.61q-5.61-5.62-13.65-6-8.04-.39-14.82 6.39-6.22 6.22-6.22 13.99 0 7.77 6.39 14.15l95.53 95.54q9.7 9.69 22.62 9.69 12.92 0 22.62-9.69l95.53-95.54q5.62-5.61 6.12-13.65t-6.28-14.82q-6.22-6.22-13.87-6.33-7.66-.12-14.27 6.27L500-504.77V-680q0-8.5-5.76-14.25T479.97-700q-8.51 0-14.24 5.75T460-680v175.23ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                      </svg>
                  </a>
                  </div>
              </div>
          <section>
              <h4 class="display-6 my-3">Write a Review</h4>
              <form action="post">FORM HEREx</form>
          </section>
          </div>
  `;
      main.classList.add("hidden");
      sectionsNav.forEach((section) => {
        section.classList.add("hidden");
      });
      output.classList.remove("hidden");

      window.addEventListener("popstate", () => {
        output.classList.add("hidden");
        main.classList.remove("hidden");
        searchGroups.classList.remove('hidden');

        sectionsNav.forEach((section) => {
          section.classList.add("hidden");
        });
      });
    });
  });

  // const resourceTitle = document.querySelector(".resourceTitle");

  window.addEventListener("popstate", (event) => {
    event.preventDefault();
    searchInput.value = "";
    searchResults.innerHTML = "";
    searchGroups.classList.remove('hidden');
  });
}

// Add event listener to search input (use keyup for every keystroke)
searchInput.addEventListener("keyup", searchResource);
searchInput.addEventListener("keyup", () => {
  if (searchInput.value.length > 0) {
    searchGroups.classList.add('hidden');
  } else {
    searchGroups.classList.remove('hidden');
  }
});

function onSbuttonClick(element) { }
