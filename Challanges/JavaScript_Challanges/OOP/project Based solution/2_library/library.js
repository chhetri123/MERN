class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.borrowed = false;
  }

  markBorrowed() {
    this.borrowed = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    this.books.push(new Book(title, author));
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  markBookBorrowed(index) {
    if (this.books[index]) {
      this.books[index].markBorrowed();
    }
  }

  getTotalCount() {
    return this.books.length;
  }
}

// DOM Manipulation
const library = new Library();

document.getElementById("addBookButton").addEventListener("click", () => {
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  if (bookTitle.trim() && bookAuthor.trim()) {
    library.addBook(bookTitle, bookAuthor);
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    displayBooks();
  }
});

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  library.books.forEach((book, index) => {
    const bookItem = document.createElement("li");
    bookItem.className = `list-group-item d-flex justify-content-between align-items-center ${
      book.borrowed ? "borrowed" : ""
    }`;
    bookItem.textContent = `${book.title} by ${book.author}`;

    const borrowButton = document.createElement("button");
    borrowButton.className = "btn btn-success btn-sm";
    borrowButton.textContent = "Borrow";
    borrowButton.addEventListener("click", () => {
      library.markBookBorrowed(index);
      displayBooks();
    });

    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger btn-sm ml-2";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      library.removeBook(index);
      displayBooks();
    });

    const buttonGroup = document.createElement("div");
    buttonGroup.appendChild(borrowButton);
    buttonGroup.appendChild(removeButton);

    bookItem.appendChild(buttonGroup);
    bookList.appendChild(bookItem);
  });
  document.getElementById(
    "totalBooks"
  ).textContent = `Total books: ${library.getTotalCount()}`;
}

displayBooks();
