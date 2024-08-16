const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary (book) { 
    myLibrary.push(book);
}

const cote = new Book ('classroom of the elite', 'kinugasa', 'more than 1 thousand', 'not read yet');
const roshidere = new Book ('Roshidere', 'IDK lol', '500', 'almost finished');

addBookToLibrary(cote);
addBookToLibrary(roshidere);

