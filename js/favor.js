// const favorite = [];

// function fetchClassList() {

// }

// AD SVG HERE
output.addEventListener('click', (e) => {
    if (e.target.classList.contains('addSVG')) {
        let resourceTitle = e.target.parentElement.parentElement.parentElement.querySelector('.resourceTitle')
        console.log(resourceTitle);
        console.log(JSON.parse(localStorage.getItem('favorite')));

        const arrayItem = JSON.parse(localStorage.getItem('favorite')).find(item => {
            if (resourceTitle.innerText === item) {
                return item;
            }
        })
        if (resourceTitle.innerText === arrayItem) {
            console.log('hi');
        }
        else {
            const favorite = JSON.parse(localStorage.getItem('favorite'));
            // console.log('addsvg')

            favorite.push(resourceTitle.innerText);
            localStorage.setItem('favorite', JSON.stringify(favorite));
            console.log(favorite);

            // favTabF();
            favDiv.classList.remove('hidden');
            favTab.innerHTML = '';

            const one = document.createElement("div");
            const two = document.createElement("div");
            const three = document.createElement("div");
            one.className = "one";
            two.className = "two";
            three.className = "three";

            JSON.parse(localStorage.getItem('favorite')).forEach((resource, index) => {
                let targetDiv = '';
                if (index % 3 === 0) {
                    targetDiv = one;
                } else if (index % 3 === 1) {
                    targetDiv = two;
                } else {
                    targetDiv = three;
                }

                // Append resource content
                targetDiv.innerHTML += `<span class="btn btn-outline-light Rbutton homeText">${resource}</span>`;
            });

            // Append the divs to the container
            favTab.appendChild(one);
            favTab.appendChild(two);
            favTab.appendChild(three);
        }

    } else if (e.target.classList.contains('removeSVG')) {

    }
});
// addSVG.addEventListener('click', () => {
//     addSVG.classList.add('hidden');
//     removeSVG.classList.remove('hidden');

//     // addSVG.parentElement.parentElement.parentElement.querySelector('.resourceTitle')
//     favorite.push(resourceTitle.innerText);
//     console.log(favorite);
//     localStorage.setItem('favorite', favorite);
//     console.log(localStorage.getItem('favorite'));

//     favDiv.classList.remove('hidden');
//     // notification code here
// });

// removeSVG.addEventListener('click', () => {
//     removeSVG.classList.add('hidden');
//     addSVG.classList.remove('hidden');

//     favoriteArray.splice(index, 1);

//     // Hide favDiv

//     if (favoriteArray.length === 0) {
//         favDiv.classList.add('hidden');
//     }
// });

// // listen for storage event. if it chnages add evenlistner to use button.
// window.addEventListener('storage', () => {
//     favDiv.innerHTML = "";

//     // Create elements to hold the resources
//     const one = document.createElement("div");
//     const two = document.createElement("div");
//     one.className = "one";
//     two.className = "two";

//     favoriteArray.forEach((resource, index) => {
//         let targetDiv;
//         if (index % 3 === 0) {
//             targetDiv = one;
//         } else if (index % 3 === 1) {
//             targetDiv = two;
//         }

//         // Append resource content
//         targetDiv.innerHTML += `<span class="btn btn-outline-light Rbutton homeText">${resource.title}</span>`;
//     });

//     // Append the divs to the container
//     favDiv.appendChild(one);
//     favDiv.appendChild(two);
// });
