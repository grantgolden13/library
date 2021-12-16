let myLibrary = [];

const addBookBtn = document.querySelector('#addBook');
const modalContainer = document.querySelector('#modalContainer');
const modal = document.querySelector('#modal')

const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');
const pagesField = document.querySelector('#pages');
const readBox = document.querySelector('#read');

const submitBtn = document.querySelector('#submit');

addBookBtn.addEventListener('click', promptNewBook);

submitBtn.addEventListener('click', addNewBook);

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function promptNewBook() {
    modalContainer.style.display = 'block';
    window.addEventListener('click', e => {
        if (e.target == modalContainer) {       // so user can exit prompt
            modalContainer.style.display = 'none';
        }
    });
}

function addNewBook(e) {
    e.preventDefault();
    let newBook = new Book(titleField.value, authorField.value, pagesField.value, readBox.value);
    addBookToLibrary(newBook);
    convertBookToCard();
    modal.reset();
    modalContainer.style.display = 'none';
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookContainer = document.querySelector('#bookContainer');
const newBookCard = document.createElement('div');

function convertBookToCard() {
    myLibrary.forEach((book) => {
        newBookCard;
        newBookCard.className = "book";
        

        bookContainer.appendChild();
    })
}

