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

    for (book of library) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        for (prop in book) {
            if (book.hasOwnProperty(prop)) //Only allows own properties
            {
                let rowInfo = '';
                if (prop === 'title') {
                    rowInfo = document.createElement('h2');
                    rowInfo.textContent = `${book[prop]}`;
                }

                else {
                    rowInfo = document.createElement('p');
                    rowInfo.textContent = `${prop}: ${book[prop]}`;  //If the property is title then only displays it's value
                }

                if (prop === 'read') {
                    rowInfo.setAttribute('class', `${prop}`)
                }
                card.appendChild(rowInfo);
            }
        }

        //Create div to append both buttons
        const div = document.createElement('div');
        const deleteButton = document.createElement('button');
        const toggleButton = document.createElement('button');

        deleteButton.textContent = 'Delete Book';
        toggleButton.textContent = 'Toggle read';
        div.appendChild(deleteButton);
        div.appendChild(toggleButton);
        card.appendChild(div);
        container.appendChild(card);

        deleteButton.addEventListener('click', (e) => {
            let index = Array.prototype.indexOf.call(container.children, e.target.parentNode.parentNode);
            e.target.parentNode.parentNode.remove();    //Search for the grandfather (.card) of the button
            myLibrary.splice(index, 1);
        })
        
        toggleButton.addEventListener('click', (e) => {
            let index = Array.prototype.indexOf.call(container.children, e.target.parentNode.parentNode);
            let statusRead = e.target.parentNode.parentNode.querySelector('.read');

            if (statusRead.textContent === 'Readed') {
                statusRead.textContent = 'Not readed';
                myLibrary[index].read = statusRead.textContent;
            }

            else {
                statusRead.textContent = 'Readed';
                myLibrary[index].read = statusRead.textContent;
            }
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