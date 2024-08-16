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

const body = document.querySelector('body');

function showBooks (library) {
    for (book of library) {
        const table = document.createElement('table');
        
        console.log('new book');
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
