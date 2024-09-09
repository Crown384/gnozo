// IN THE NAME OF THE FATHER, SON & HOLY SPIRIT, BLESSED FOREVER AMEN

document.addEventListener("DOMContentLoaded", Levites);

function Levites() {
    const main = document.querySelector("main");

    const sectionTitles = ["chm101", "phy101", "cve304"];
    const keywordsIDS = [
        { id: "chm101", keywords: ["chm101", "chemistry"] },
        { id: "phy101", keywords: ["physics", "phy101"] },
        { id: "cve304", keywords: ["civil", "cve304"] }
    ];

    // Dynamically create and insert sections
    sectionTitles.forEach((section) => {
        main.innerHTML += `
            <section id="${section}">
                <div class="header">
                    <h3>${section}</h3>
                    <p class="muted">></p>
                </div>
                <section class="test">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </section>
            </section>
        `;
    });

    // Re-select Sections to include newly created sections
    const Sections = document.querySelectorAll("section");

    // Filter and populate books for each section
    Sections.forEach((section) => {
        const matchingBooks = engineeringBooks.filter((book) => {
            const sectionId = section.id;
            const matchingKeywords = keywordsIDS.find(k => k.id === sectionId)?.keywords || [];
            return book.keywords.some(keyword => matchingKeywords.includes(keyword));
        });

        // Assuming resourceFunc is a function to process matching books
        if (matchingBooks.length) {
            resourceFunc(matchingBooks);
        }
    });
}

function resourceFunc(books) {
    // Logic to handle books
    console.log(books);
}