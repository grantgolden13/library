const myLibrary = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 269,
        read: "Yes"
    }
];

const modal = document.querySelector('.modal');
const addBookBtn = document.querySelector('.add-book');
const bookContainer = document.querySelector('.book-container')

const submitBtn = document.getElementById('submitBtn');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

const bookFactory = function(title, author, pages, read) {
    return {
        title: title,
        author: author,
        pages: pages,
        read: read
    }
}

const renderBook = function(obj) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = "Title: ";
    const titleSpan = document.createElement('span');
    titleSpan.textContent = obj.title;
    titleDiv.appendChild(titleSpan);

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    authorDiv.textContent = "Author: ";
    const authorSpan = document.createElement('span');
    authorSpan.textContent = obj.author;
    authorDiv.appendChild(authorSpan);

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    pagesDiv.textContent = "# of Pages: ";
    const pagesSpan = document.createElement('span');
    pagesSpan.textContent = obj.pages;
    pagesDiv.appendChild(pagesSpan);

    const readDiv = document.createElement('div');
    readDiv.classList.add('read');
    readDiv.textContent = "Read?: ";
    const readSpan = document.createElement('span');
    readSpan.textContent = obj.read;
    readDiv.appendChild(readSpan);

    bookDiv.append(titleDiv, authorDiv, pagesDiv, readDiv);

    bookContainer.appendChild(bookDiv);
}

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

addBookBtn.addEventListener('click', () => {
    modal.style.display = "grid";
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newBook = bookFactory(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    myLibrary.push(newBook);
    renderBook(newBook);
    modal.style.display = "none";
});

/*

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

*/