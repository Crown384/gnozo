const searchGroups = document.querySelector(".searchGroups");
const groups = document.querySelectorAll(".groups");
const groupsOutput = document.getElementById("groupsOutput");

document.addEventListener("DOMContentLoaded", function () {
  function renderFilteredGroupItems(containerIds, filteredItems) {
    containerIds.forEach((containerId) => {
      searchGroups.addEventListener('click', e => {
        const first = document.querySelector(".first");
        const second = document.querySelector(".second");
        // second.innerHTML = ``;
        // first.innerHTML = ``;

        if (e.target.id === containerId) {
          filteredItems.forEach((resource, index) => {
            // let targetDiv;
            if (index % 2 === 0) {
              first.innerHTML += `
              <div class="groupsResults">
                <span class="text-break resourceTitle">${resource.title}</span>
                <div class="details mt-2">
                  <small>${resource.courseCode}</small> •
                  <small>${resource.fileType}</small> • 
                  <small>${resource.fileSize}</small>
                </div>
              </div>
              `;
            } else {
              second.innerHTML += `
                <div class="groupsResults">
                <span class="text-break resourceTitle">${resource.title}</span>
                <div class="details mt-2">
                  <small>${resource.courseCode}</small> •
                  <small>${resource.fileType}</small> • 
                  <small>${resource.fileSize}</small>
                </div>
              </div>
                `;
            }
            // Append resource content
            // targetDiv.innerHTML += `<span class="btn btn-outline-light Rbutton">${resource.title}</span>`;
          });

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
              <div class="row mt-4">
                <div id="arrowBack" class="col-12 material-symbols-rounded">west</div>
                <div class="col-12 mt-4">
                  <span class="mt-4 h4 resourceTitle text-break">${specifyMaterial.title}</span>
                </div>
              </div>

              <div class="col-12 mt-3">
                <div class="icons">
                  <!-- ADD TO FAVORITE ICON -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path
                      d="M460-460v140q0 8.5 5.76 14.25t14.27 5.75q8.51 0 14.24-5.75T500-320v-140h140q8.5 0 14.25-5.76t5.75-14.27q0-8.51-5.75-14.24T640-500H500v-140q0-8.5-5.76-14.25T479.97-660q-8.51 0-14.24 5.75T460-640v140H320q-8.5 0-14.25 5.76T300-479.97q0 8.51 5.75 14.24T320-460h140Zm20.13 340q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>

                  <!-- DOWNLOAD ICON -->
                  <a href="${specifyMaterial.downLink}" download="resoireTitle by resoirce Author from GNOZO COT IKOLE">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                      <path
                        d="M320-300h320q8.5 0 14.25-5.76t5.75-14.27q0-8.51-5.75-14.24T640-340H320q-8.5 0-14.25 5.76T300-319.97q0 8.51 5.75 14.24T320-300Zm140-204.77-69.85-69.61q-5.61-5.62-13.65-6-8.04-.39-14.82 6.39-6.22 6.22-6.22 13.99 0 7.77 6.39 14.15l95.53 95.54q9.7 9.69 22.62 9.69 12.92 0 22.62-9.69l95.53-95.54q5.62-5.61 6.12-13.65t-6.28-14.82q-6.22-6.22-13.87-6.33-7.66-.12-14.27 6.27L500-504.77V-680q0-8.5-5.76-14.25T479.97-700q-8.51 0-14.24 5.75T460-680v175.23ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="col-12 smalls mt-3">
                <small>${specifyMaterial.courseCode}</small> • 
                <small>${specifyMaterial.semester}</small> • 
                <small>${specifyMaterial.fileSize}</small>
              </div>
            </div>
        `;
              main.classList.add("hidden");
              sectionsNav.forEach((section) => {
                section.classList.add("hidden");
              });
              output.classList.remove("hidden");

              const arrowBack = document.querySelector("#arrowBack");
              arrowBack.addEventListener('click', () => {
                output.classList.add("hidden");
                main.classList.remove("hidden");

                sectionsNav.forEach((section) => {
                  section.classList.add("hidden");
                });
              });

              window.addEventListener("popstate", () => {
                output.classList.add("hidden");
                main.classList.remove("hidden");

                sectionsNav.forEach((section) => {
                  section.classList.add("hidden");
                });
              });
            });
          });
          history.pushState(null, null, window.location.href);
          console.log(containerId);
          search.classList.add("hidden");
          groupsOutput.classList.remove("hidden");

          window.addEventListener("popstate", (e) => {
            e.preventDefault();
            sectionsNav.forEach((section) => {
              section.classList.add("hidden");
            });
            search.classList.remove("hidden");
            groupsOutput.classList.add("hidden");
            main.classList.add("hidden");
            second.innerHTML = ``;
            first.innerHTML = ``;
          });
        }
      });
    });
  }

  // Filter items by keywords
  function filterGroupsbyKeywords(engineeringBooks, keywords) {
    return engineeringBooks.filter((item) => {
      return keywords.some((keyword) => item.keywords.includes(keyword));
    });
  }

  // Use the section filters
  const groupFilters = [
    { keywords: ["chm 101", "chm101", "chemistry", 'chm'], containerIds: ["chemistryG"] },
    { keywords: ['phy', 'phy101', 'phy 101', 'physics'], containerIds: ["physicsG"] },
    { keywords: ['mth', 'mathematics'], containerIds: ["mathsG"] },
    { keywords: ['gst', 'gst101'], containerIds: ["gstG"] },
  ];

  groupFilters.forEach((filter) => {
    const filteredItems = filterGroupsbyKeywords(
      engineeringBooks,
      filter.keywords
    );
    renderFilteredGroupItems(filter.containerIds, filteredItems);
  });
});
