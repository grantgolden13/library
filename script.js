const myLibrary = [];

const modal = document.querySelector('.modal');
const addBookBtn = document.querySelector('.btn');
const mainGrid = document.querySelector('main');

const submitBtn = document.getElementById('submit');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    turnObjToDOMElement() {
        const newBookElem = document.createElement('div');
        newBookElem.classList.add('cell');
    
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.textContent = "X";
        newBookElem.append(removeBtn);
    
        const titleP = document.createElement('p');
        titleP.textContent = `🔤 Title: ${this.title}`;
        newBookElem.append(titleP);
    
        const authorP = document.createElement('p');
        authorP.textContent = `✍️ Author: ${this.author}`;
        newBookElem.append(authorP);
        
        const pagesP = document.createElement('p');
        pagesP.textContent = `📖 Pages: ${this.pages}`;
        newBookElem.append(pagesP);
    
        const readP = document.createElement('p');
        readP.textContent = `🤓 Read?: ${this.read}`;
        newBookElem.append(readP);
    
        mainGrid.append(newBookElem);
    }

    addBookToLibrary() {
        let newBook = new Book(title.value, author.value, pages.value, read.value);
        myLibrary.push(newBook);
        newBook.turnObjToDOMElement();
        Book.prototype.createCloseBtns();
    }

    createCloseBtns() {
        const closeBtns = [...document.querySelectorAll('.remove')];
        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const cell = btn.parentElement;
                const index = myLibrary.indexOf(cell);
                myLibrary.splice(index, 1);
                cell.remove();
            });
        });
    }

    events() {
        addBookBtn.addEventListener('click', function() {
            modal.style.display = "block";
        });
        
        window.addEventListener('click', function(e) {
            if (e.target == modal) {
                //  escape from form
                modal.style.display = "none";
            }
        });
        
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            Book.prototype.addBookToLibrary();
            modal.style.display = "none";
        });
    }
}

Book.prototype.events();