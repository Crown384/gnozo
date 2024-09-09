// IN THE NAME OF THE FATHER, SON & HOLY SPIRIT, BLESSED FOREVER AMEN

const main = document.querySelector("main");
const Sections = document.querySelectorAll("section");
const hi = document.querySelector("section");
console.log(Sections);
console.log(hi.id);
// const bookArray = [];

const sectionTitles = ["chm101", "phy101", "cve304"];

const keywordsIDS = [
  { id: "chm101", keywords: ["chm101", "chm101", "chemistry"] },
];

sectionTitles.forEach((section) => {
  console.log(section);
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

document.addEventListener("DOMContentLoaded", Levites);

function Levites() {
  Sections.forEach((section) => {
    console.log(section.id);
    const bookArray = engineeringBooks.filter((book) => {
      keywordsIDS.forEach((matchingBook) => {
        book.keywords.forEach((bookKeyword) => {
          matchingBook.keywords.forEach((matchingBookKeyword) => {
            if (
              bookKeyword === matchingBookKeyword &&
              section.id === matchingBook.id
            ) {
              return book;
            }
          });
        });
      });
    });
    console.log(bookArray);
  });

  Sections.forEach((section) => {
    engineeringBooks.forEach((book) => {
      keywordsIDS.forEach((matchingBook) => {
        book.keywords.forEach((bookKeyword) => {
          matchingBook.keywords.forEach((matchingBookKeyword) => {
            if (
              bookKeyword === matchingBookKeyword &&
              section.id === matchingBook.id
            ) {
              // bookArray.push(book);
              resourceFunc(bookArray);
            }
          });
        });
      });
    });
  });
}
