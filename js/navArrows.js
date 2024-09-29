const navArrows = document.querySelector(".navArrows");

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("navArrow")) {
    const first = document.querySelector(".first");
    const second = document.querySelector(".second");
    second.innerHTML = ``;
    first.innerHTML = ``;
    // console.log(e.target.nextElementSibling);

    // first = ``;
    // second = ``;
    engineeringBooks.forEach((resource, index) => {
      if (
        resource.keywords.includes(
          e.target.nextElementSibling.textContent.toLowerCase()
        )
      ) {
        history.pushState(null, null, window.location.href);

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
        } else if (index % 2 !== 0) {
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
      }
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
                  <span class="mt-4 h4 specificTitle text-break">${specifyMaterial.title}</span>
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

              <span class="container mt-4" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
              <h4 style="align-self: start; text-align: left;">Preview <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                  <path
                    d="M480.18-353.85q60.97 0 103.47-42.68t42.5-103.65q0-60.97-42.68-103.47t-103.65-42.5q-60.97 0-103.47 42.68t-42.5 103.65q0 60.97 42.68 103.47t103.65 42.5ZM480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.11 152q-129.96 0-236.88-70.73Q136.31-381.46 83.08-500q53.23-118.54 160.04-189.27T479.89-760q129.96 0 236.88 70.73Q823.69-618.54 876.92-500q-53.23 118.54-160.04 189.27T480.11-240ZM480-500Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                </svg>
              </h4>
                <iframe style="margin: 0 auto;"
                  src="${specifyMaterial.downLink}"
                  frameborder="0" width="100%" height="70vh"></iframe>
              </span>
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

    main.classList.add("hidden");
    groupsOutput.classList.remove("hidden");

    window.addEventListener("popstate", (e) => {
      e.preventDefault();
      main.classList.remove("hidden");
      groupsOutput.classList.add("hidden");
    });
  }
});
