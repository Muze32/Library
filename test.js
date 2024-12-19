const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.Title = title; 
    this.Author = author;
    this.Pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary (title, author, pages, isRead) { 
    let book = new Book (title, author, pages, isRead);
    myLibrary.push(book);
}

addBookToLibrary('Alice in Wonderland', 'Lewis Carroll', '96', 'Readed');

const container = document.querySelector('#container');

function showBooks (library){
    container.textContent = '';
    createBooks(library);
}

const createBooks = (library) => {
    for(book of library){
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        createRowInfo(book);
        //createRowButtons();
        }
}

/////////////////////CREATE ROW BUTTONS/////////////////////////////////
/*
const createRowButtons = () => {
    const div = document.createElement('div');
    const deleteButton = document.createElement('button');
    const toggleButton = document.createElement('button');

    deleteButton.textContent = 'Delete Book';
    toggleButton.textContent = 'Toggle read';
    div.appendChild(deleteButton);
    div.appendChild(toggleButton);
    card.appendChild(div);
    container.appendChild(card);
}
*/
////////////////////REPLACES LINE 30 TO 52 IN SCRIPT.JS//////////////////
const createRowInfo = (book) => {
    for (prop in book){
        if(book.hasOwnProperty(prop)){
            createRow(book);
        }
    }
}

const createRow = (book) => {
    let rowInfo = '';
    if (prop === 'Title') {
        rowInfo = document.createElement('h2');
        rowInfo.textContent = `${book[prop]}`;
    }

    else if (prop === 'Read') {
        rowInfo = document.createElement('p');
        rowInfo.textContent = `${book[prop]}`;
        rowInfo.setAttribute('class', `${prop}`)
    }

    else {
        rowInfo = document.createElement('p');
        rowInfo.textContent = `${prop}: ${book[prop]}`;  //If the property is title then only displays it's value
    }
    card.appendChild(rowInfo);
}
///////////////////////////////////////////////////////


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
    showBooks(myLibrary);
})