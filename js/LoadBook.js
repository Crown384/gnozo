document.addEventListener("DOMContentLoaded", function () {
  function renderFilteredItems(containerIds, filteredItems) {
    containerIds.forEach((containerId) => {
      const container = document.getElementById(containerId);
      if (container) {
        // Ensure the container element exists
        container.innerHTML = "";
        // console.log(typeof Array.from(filteredItems));
        const one = container.querySelector(".one");
        const two = container.querySelector(".two");
        const three = container.querySelector(".three");
        // resourceFunc(filteredItems);
        filteredItems.forEach((resource, index) => {
          let hi;
          if(index % 3 === 0) {
            hi += one;
          } else if (index % 2 === 0 && (index - 3) % 2 === 0) {
            hi += two;
          } else {
            hi += three;
          }

          container.innerHTML += hi;
          // console.log(index);
        });

        // filteredItems.forEach((item) => {
        //   let itemHTML;
        //   itemHTML = `
        //       <span class="btn btn-outline-light">${item.title}</span>;
        //     `;

        // container.innerHTML += itemHTML;
        // });
      } else {
        console.warn(`Container with ID "${containerId}" not found.`); // Log a warning if the container is missing
      }
    });
  }

  // resource Function
  // function resourceFunc(arrayName) {
  //   arrayName.forEach((resource) => {
  //     const one = resource.querySelector(".one");
  //     const two = resource.querySelector(".two");
  //     const three = resource.querySelector(".three");
  //     let index = arrayName.indexOf(resource);

  //     if (index % 3 == 0) {
  //       one.innerHTML += `<p class="btn btn-outline-light Rbutton">${resource.title}</p>`;
  //     } else if (index % 2 == 0 && (index - 3) % 2 != 0) {
  //       two.innerHTML += `<p class="btn btn-outline-light Rbutton">${resource.title}</p>`;
  //     } else {
  //       three.innerHTML += `<p class="btn btn-outline-light Rbutton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z"/></svg>${resource.title}</span></p>`;
  //     }

  //     // console.log(index);
  //   });
  // }

  // Filter items by keywords
  function filterItemsByKeywords(engineeringBooks, keywords) {
    return engineeringBooks.filter((item) => {
      return keywords.some((keyword) => item.keywords.includes(keyword));
    });
  }

  // Use the section filters
  const sectionFilters = [
    { keywords: ["chm101", "chemistry", "james"], containerIds: ["chm101"] },
  ];

  sectionFilters.forEach((filter) => {
    const filteredItems = filterItemsByKeywords(
      engineeringBooks,
      filter.keywords
    );
    renderFilteredItems(filter.containerIds, filteredItems);
  });
});
