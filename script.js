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

function addBookToLibrary (title, author, pages, read) { 
    let book = new Book (title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('classroom of the elite', 'kinugasa', 'more than 1 thousand', 'not read yet');

addBookToLibrary('Roshidere', 'IDK lol', '500', 'almost finished');

const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);


function showBooks (library) {
    container.textContent = '';

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
        container.appendChild(table);
    }
}

showBooks(myLibrary);

/**********ADD NEW BOOK***************/

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#show');
const closeButton = document.querySelector('#close');
const form = document.querySelector('form');

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

