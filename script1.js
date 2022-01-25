const modal = document.querySelector('.modal');
const addBookBtn = document.querySelector('.btn');
const gridContainer = document.querySelector('main');

// reveals hidden form

addBookBtn.addEventListener('click', function() {
    modal.style.display = "block";
});

// allows escape from form (modal is the whole bckgrnd)

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

const Book = function(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.turnBookToElement = function() {
    let newBookCell = document.createElement("div");
    newBookCell.classList.add('cell');
    let titleP = document.createElement("p");
    let titleT = document.createTextNode(`Title: ${this.title}`);
    titleP.appendChild(titleT);
    newBookCell.appendChild(titleP);
    let authorP = document.createElement("p");
    let authorT = document.createTextNode(`Author: ${this.author}`);
    authorP.appendChild(authorT);
    newBookCell.appendChild(authorP);
    let pagesP = document.createElement("p");
    let pagesT = document.createTextNode(`# of Pages: ${this.pages}`);
    pagesP.appendChild(pagesT);
    newBookCell.appendChild(pagesP);
    let readP = document.createElement("p");
    let readT = document.createTextNode(`Read?: ${this.isRead}`);
    readP.appendChild(readT);
    newBookCell.appendChild(readP);
    gridContainer.appendChild(newBookCell);
}

// on submit, new book object gets created and
// added to the array myLibrary

let myLibrary = [];

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
    modal.style.display = "none";
});

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isRead = (document.getElementById("isRead").value == "checked" ? 
        "Have read it." : "Not read yet");
    const book = Object.create(Book.prototype, { title: { value: title },
        author: { value: author },
        pages: { value: pages },
        isRead: { value: isRead } });
    myLibrary.push(book);
    book.turnBookToElement();
}

// function turn books into elems and append them
// as visible DOM/HTML elements


