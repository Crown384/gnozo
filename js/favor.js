// const favorite = [];

// function fetchClassList() {

// }

// AD SVG HERE
// document.addEventListener('DOMContentLoaded', () => {
//     // Ensure localStorage favorite array exists
//     if (!localStorage.getItem('favorite')) {
//         localStorage.setItem('favorite', JSON.stringify([]));
//     }
// });

output.addEventListener('click', (e) => {
    if (e.target.classList.contains('addSVG')) {
        let resourceTitle = e.target.parentElement.parentElement.parentElement.querySelector('.resourceTitle');

        if (resourceTitle) {
            e.target.classList.add('hidden');
            e.target.nextElementSibling.classList.remove('hidden');

            let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
            const arrayItem = favorite.find(item => resourceTitle.innerText === item);

            if (!arrayItem) {
                favorite.push(resourceTitle.innerText);
                localStorage.setItem('favorite', JSON.stringify(favorite));

                favDiv.classList.remove('hidden');
                favTab.innerHTML = '';

                // Create the div containers
                const one = document.createElement("div");
                const two = document.createElement("div");
                const three = document.createElement("div");
                one.className = "one";
                two.className = "two";
                three.className = "three";

                favorite.forEach((resource, index) => {
                    let targetDiv = index % 3 === 0 ? one : (index % 3 === 1 ? two : three);
                    targetDiv.innerHTML += `<span class="btn btn-outline-light Rbutton homeText">${resource}</span>`;
                });

                favTab.appendChild(one);
                favTab.appendChild(two);
                favTab.appendChild(three);
            }
        }
    } else if (e.target.classList.contains('removeSVG')) {
        let resourceTitle = e.target.parentElement.parentElement.parentElement.querySelector('.resourceTitle');
        if (resourceTitle) {
            e.target.classList.add('hidden');
            e.target.previousElementSibling.classList.remove('hidden');

            let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
            const arrayItem = favorite.find(item => resourceTitle.innerText === item);
            const indexofResource = favorite.indexOf(arrayItem);

            if (indexofResource !== -1) {
                // Remove item from favorite array
                favorite.splice(indexofResource, 1);
                localStorage.setItem('favorite', JSON.stringify(favorite));

                // Check if favorite array is empty after removal
                if (favorite.length === 0) {
                    document.querySelector('.fav').classList.add('hidden');  // Hides the div
                    console.log('Favorites empty, hiding favDiv');
                }

                favTab.innerHTML = ''; // Clear tab

                // Rebuild the favorite list if there are still items
                if (favorite.length > 0) {
                    const one = document.createElement("div");
                    const two = document.createElement("div");
                    const three = document.createElement("div");
                    one.className = "one";
                    two.className = "two";
                    three.className = "three";

                    favorite.forEach((resource, index) => {
                        let targetDiv = index % 3 === 0 ? one : (index % 3 === 1 ? two : three);
                        targetDiv.innerHTML += `<span class="btn btn-outline-light Rbutton homeText">${resource}</span>`;
                    });

                    favTab.appendChild(one);
                    favTab.appendChild(two);
                    favTab.appendChild(three);
                }
            }
        }
    }
});


