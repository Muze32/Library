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

const container = document.querySelector('#container');

function showBooks (library) {
    container.textContent = '';
    let i = 0;

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

        // Create bottom row to set buttons
        const bottomRow = document.createElement('tr');
        const deleteButton = document.createElement('button');
        const toggleButton = document.createElement('button');

        deleteButton.textContent = 'Delete Book';
        deleteButton.setAttribute('id', `${i}`);
        i++;
        toggleButton.textContent = 'Toggle read';
        bottomRow.appendChild(deleteButton);
        bottomRow.appendChild(toggleButton);
        bottomRow.setAttribute('class', 'bottomRow');
        table.appendChild(bottomRow);
        container.appendChild(table);

        deleteButton.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
            myLibrary.splice(e.target.id, 1);
        })
        
        toggleButton.addEventListener('click', (e) => {
            console.log(e.target.parentNode);
        })
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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(titleName.value, authorName.value, numberPages.value, read.value);
    dialog.close();
    titleName.value = '';
    authorName.value = '';
    numberPages.value = '';
    read.value = '';
    showBooks(myLibrary);
})