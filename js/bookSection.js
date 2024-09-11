const sections = [
  {
    title: "chm101",
  },
  {
    title: "Prayer",
  },
  {
    title: "Holy Spirit",
  },
  {
    title: "2024",
  },
  {
    title: "Fasting",
  },
];

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function createSections() {
  const shuffledSections = shuffle(sections.slice()); // Copy and shuffle sections
  const container = document.createElement("div");
  container.setAttribute('class', 'container'); // Create container element

  shuffledSections.forEach((section) => {
    const sectionHTML = `
        <div class="header">
          <h3>${section.title}</h3>
          <p class="muted">></p>
        </div>
        <section class="test" id="${section.title}">
        </section>
      `;

    const sectionElement = document.createElement("section");
    sectionElement.innerHTML = sectionHTML;
    container.appendChild(sectionElement);
  });

  const mainTag = document.querySelector("main");
  mainTag.appendChild(container);
  // document.main.appendChild(container);
}

document.addEventListener("DOMContentLoaded", function () {
  createSections();
});
