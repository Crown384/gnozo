document.addEventListener("DOMContentLoaded", function () {
    function renderFilteredItems(containerIds, filteredItems) {
        containerIds.forEach((containerId) => {
            const container = document.getElementById(containerId);
            if (container) {
                // Ensure the container element exists
                container.innerHTML = "";

                // Create elements to hold the resources
                const one = document.createElement('div');
                const two = document.createElement('div');
                const three = document.createElement('div');
                one.className = 'one';
                two.className = 'two';
                three.className = 'three';

                filteredItems.forEach((resource, index) => {
                    let targetDiv;
                    if (index % 3 === 0) {
                        targetDiv = one;
                    } else if (index % 3 === 1) {
                        targetDiv = two;
                    } else {
                        targetDiv = three;
                    }

                    // Append resource content
                    targetDiv.innerHTML += `<p class="btn btn-outline-light Rbutton">${resource.title}</p>`;
                });

                // Append the divs to the container
                container.appendChild(one);
                container.appendChild(two);
                container.appendChild(three);
            } else {
                console.warn(`Container with ID "${containerId}" not found.`); // Log a warning if the container is missing
            }
        });
    }

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
        const filteredItems = filterItemsByKeywords(engineeringBooks, filter.keywords);
        renderFilteredItems(filter.containerIds, filteredItems);
    });
});