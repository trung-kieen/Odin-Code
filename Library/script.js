const myLibrary = [];

class Book {
  constructor(name, author, readed, urlCover = '') {
    this.name = name;
    this.author = author;
    this.readed = readed;
    this.urlCover = urlCover;
  }
}
function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const updateAnalyze = () => {
  const totalReaded = myLibrary.reduce((accumulator, book) => {
    if (book.readed) {
      return (accumulator += 1);
    } else {
      return accumulator;
    }
  }, 0);
  const totalBook = myLibrary.length;
  const totalBookElement = document.querySelector('#total-book');
  totalBookElement.innerHTML = totalBook;
  const totalReadedElement = document.querySelector('#total-readed');
  totalReadedElement.innerHTML = totalReaded;
};
const updateBookGrid = () => {
  const grid = document.querySelector('.book-grid');
  grid.innerHTML = '';
  myLibrary.forEach(element => {
    const gridItemElement = document.createElement('div');
    grid.appendChild(gridItemElement);
    gridItemElement.classList.add('.grid-item');

    const gridItemCover = document.createElement('img');
    gridItemElement.appendChild(gridItemCover);
    gridItemCover.setAttribute('scr', element.urlCover);

    // Title inoformation in grid item
    const gridItemName = document.createElement('h3');
    gridItemElement.appendChild(gridItemName);
    gridItemName.classList.add('grid-item-name');
    gridItemName.textContent = element.name;

    const gridItemAuthor = document.createElement('p');
    gridItemElement.appendChild(gridItemAuthor);
    gridItemAuthor.textContent = element.author;

    const gridItemReaded = document.createElement('input');
    gridItemElement.appendChild(gridItemReaded);
    gridItemReaded.setAttribute('type', 'checkbox');
    gridItemReaded.classList.add('grid-item-readed');
    gridItemReaded.insertAdjacentHTML('afterend', '<span>Read</span>');
    // console.log(element.readed);
    gridItemReaded.checked = element.readed;
  });
};
const updateReadStatus = (() => {
  var grid = document.querySelector('.book-grid');
  
  grid.childNodes.forEach(node => {
    console.log(node);
  });
})();

const libraryDom = (() => {
  const addBookBtn = document.getElementById('addBookBtn');
  const dialog = document.getElementById('dialog');
  const form = document.getElementById('form');
  const closeButton = document.getElementById('closeButton');

  addBookBtn.addEventListener('click', () => {
    dialog.showModal();
  });

  closeButton.addEventListener('click', () => {
    dialog.close();
  });
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.open) {
      dialog.close();
    }
  });
  form.addEventListener('submit', event => {
    event.preventDefault(); // Prevent form submission

    // You can perform additional actions here, like sending data to a server
    var name = document.getElementById('name').value;
    name = name.trim();
    var author = document.getElementById('author').value;
    author = author.trim();
    var urlCover = document.getElementById('url-cover').value;
    urlCover = urlCover.trim();
    const readed = document.getElementById('readed').checked;
    // Validate here not collision with previous book in library
    var libraryIncludeBook = false;
    myLibrary.forEach(book => {
      if (book.name == name) {
        libraryIncludeBook = true;
      }
    });
    if (libraryIncludeBook) {
      document.getElementById('name').value = '';
      document.getElementById('name').focus();
      document.querySelector('.error-messages').innerHTML =
        'This book already exists';
    } else {
      document.querySelector('.error-messages').innerHTML = '';
      const book = new Book(name, author, readed);
      dialog.close();
      form.reset(); // Reset input in form
      addBookToLibrary(book);
      updateBookGrid();
      updateAnalyze();
    }
  });
})();

// Make accumulate all book in library
// Search book in lib
const defaultBook = new Book(
  'Harry Potter',
  'J.K Rowling',
  true,
  'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1170803558l/72193.jpg',
);
addBookToLibrary(defaultBook);
updateBookGrid();
updateAnalyze();
