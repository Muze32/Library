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

let book = new Book ('classroom of the elite', 'kinugasa', 'more than 1 thousand', 'not read yet');
addBookToLibrary(book);

book = new Book ('Roshidere', 'IDK lol', '500', 'almost finished');

addBookToLibrary(book);

const body = document.querySelector('body');

function showBooks (library) {
    for (book of library) {
        const table = document.createElement('table');
        
        for (prop in book) {
            if (book.hasOwnProperty(prop)) //Only allows own properties
            {
                const row = document.createElement('tr');
                const data = document.createElement('td');
                const header = document.createElement('th');

                // Defines hader text as name of properties and data as values
                header.textContent = `${prop}`;
                data.textContent = `${book[prop]}`;

                //Appends both th and td to tr and then append tr to table
                row.appendChild(header);
                row.appendChild(data);
                table.appendChild(row);
            }
        }
        body.appendChild(table);
    }
}

showBooks(myLibrary);

/**********ADD NEW BOOK***************/

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#show');
const closeButton = document.querySelector('#close');
const submitButton = document.querySelector('#submit');

const titleName = document.querySelector('#title_name');
const authorName = document.querySelector('#author_name');
const numberPages = document.querySelector('#pages');
const read = document.querySelector('#read');

showButton.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(titleName.value);
})