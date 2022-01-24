const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');

// reveals hidden form

btn.addEventListener('click', function() {
    modal.style.display = "block";
});

// allows escape from form (modal is the whole bckgrnd)

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

// so i need to figure out how to link an object constructor
// to this callback function below

const Book = function(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// on submit, new book object gets created and
// added to the array myLibrary

const submit = document.getElementById("submit");

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    console.log(title);
});





// loop over myLibrary, create an element for each object
// and append that element to <main>



