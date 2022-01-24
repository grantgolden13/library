let myLibrary = [];

const addBookBtn = document.querySelector('#addBook');
const modalContainer = document.querySelector('#modalContainer');
const modal = document.querySelector('#modal')

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
        if (e.target == modalContainer) {           // so user can exit prompt
            modalContainer.style.display = 'none';
        }
    });
}

function addBookToLibrary() {
    let tValue = document.querySelector('#title').value;
    let aValue = document.querySelector('#author').value;
    let pValue = document.querySelector('#pages').value;
    let rValue = document.querySelector('#read').value;
    const book = new Book(tValue, aValue, pValue, rValue);
    myLibrary.push(book);
    convertBookToCard();
    displayBooks();
    modal.reset();
    modalContainer.style.display = 'none';
}

function addNewBook(e) {
    e.preventDefault();
    addBookToLibrary();
}

function convertBookToCard() {
    for (let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("book");
        newDiv.setAttribute('id', `${i}`);
        bookContainer.appendChild(newDiv);
    }
}

const bookContainer = document.querySelector('#bookContainer');

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let divRef = document.getElementById(`${i}`);
        divRef.innerText += this.title;
        divRef.innerText += this.author;
        divRef.innerText += this.pages;
        divRef.innerText += this.read;
    }   
}



// for each book in the Library i want to 
// take each piece of its info and append each
// property value into a DOM element that is created on the fly 

