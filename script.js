const myLibrary = [];

function Book (title, author, pages, read) {
    this.Title = title; 
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}
Book.prototype.changeStatus = function() {
    if(this.Read === 'Readed'){
        this.Read = 'Not readed';
    }
    else {
        this.Read = 'Readed';
    }
}

function addBookToLibrary (title, author, pages, read) { 
    let book = new Book (title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('Alice in Wonderland', 'Lewis Carroll', '96', 'Readed');

const container = document.querySelector('#container');
//////////////MAIN FUNCTION/////////////////////////////
function showBooks (library) {
    resetContainerDiv(container);
    addBooks(library, container);
}

///////////////////////////////////////////////////////

function addBooks(library, container){
    for(book of library){
        createCard(book, container);
    }
}

function createCard(book, container){
    const card  = document.createElement('div');
    card.setAttribute('class', 'card');
    for(prop in book){
        createInfoRow(book, card);
    }
    createButtonsRow(card, container);
    container.appendChild(card);
}
//////////////////CREATE ELEMENTS///////////////////////////////
function createInfoRow(book, card){
    if (book.hasOwnProperty(prop)) //Only allows own properties
    {
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
}

function createButtonsRow(card, container){
    const div = document.createElement('div');
    const deleteButton = document.createElement('button');
    const toggleButton = document.createElement('button');

    deleteButton.textContent = 'Delete Book';
    deleteButton.addEventListener('click', (e) =>deleteListener(e, container));
    toggleButton.textContent = 'Toggle read';
    toggleButton.addEventListener('click', (e) => toggleListener(e, container));
    div.appendChild(deleteButton);
    div.appendChild(toggleButton);
    card.appendChild(div);
}

///////////////////////EVENT LISTENERS////////////////////////
function deleteListener(e, container){
    let index = Array.prototype.indexOf.call(container.children, e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.remove();    //Search for the grandfather (.card) of the button
    myLibrary.splice(index, 1);
}

function toggleListener(e, container){
    let index = Array.prototype.indexOf.call(container.children, e.target.parentNode.parentNode);
    let book = myLibrary[index];
    let statusRead = e.target.parentNode.parentNode.querySelector('.Read');

    book.changeStatus();
    statusRead.textContent = book.Read;
}

//////////////////////////////////////////////////////////////

function resetContainerDiv(container) {
    container.textContent = '';
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
    showBooks(myLibrary);
})