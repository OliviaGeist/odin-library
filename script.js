let myLibrary = [];

const Book = function(title, author, pages, hasRead) {
    if(!new.target) {
        throw Error("This function must be called with 'new'");      
    };
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
};

function addBookToLibrary(title, author, pages, hasRead) {
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
};

function displayLibrary() {
    for (const myBook of myLibrary) {
        const libraryDisplay = document.querySelector(".libraryDisplay");

        const bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "bookDiv");
        bookDiv.setAttribute("data-bookuuid", `${myBook.id}`);

        const bookTitle = document.createElement("h2");
        bookTitle.setAttribute("class", "bookTitle");
        const bookAuthor = document.createElement("h3");
        bookAuthor.setAttribute("class", "bookAuthor");
        const bookPages = document.createElement("p");
        bookPages.setAttribute("class", "bookPages");
        const bookHasRead = document.createElement("h4");
        bookHasRead.setAttribute("class", "bookHasRead");

        bookTitle.textContent = `${myBook.title}`;
        bookAuthor.textContent = `By: ${myBook.author}`;
        bookPages.textContent = ` Pages: ${myBook.pages}`;
        if (myBook.hasRead === true) {
            bookHasRead.textContent = `Read`;
        } else {
            bookHasRead.textContent =`Not read`;
        };

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookHasRead);

        libraryDisplay.appendChild(bookDiv);
    };
};

function removeLibraryDisplay() {
    const libraryDisplay = document.querySelector(".libraryDisplay");
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.firstChild);
    };
};

addBookToLibrary("Splambus", "Skrunkly", 67, true);
addBookToLibrary("Peepo", "Spooble", 88, false);
addBookToLibrary("The Grimpo", "Spooble", 536, false);
addBookToLibrary("Prepare! The Pleebles are Here!", "Scrumbo", 546, true);
addBookToLibrary("An Introduction to Tobbie", "Skrunkly", 23, true);
addBookToLibrary("Art of the Schmeal", "Spap", 343, false);

displayLibrary();

const newBookDialog = document.querySelector("#newBookDialog");
const newBookButton = document.querySelector(".newBookButton");
const submitAddBookButton = document.querySelector("#submitAddBookDialog");

function openNewBookDialog() {
    newBookDialog.showModal();
    document.querySelector("#newBookTitle").value = "";
    document.querySelector("#newBookAuthor").value = "";
    document.querySelector("#newBookPages").value = "";
    document.querySelector("#newBookHasRead").checked = false;
};

newBookButton.addEventListener("click", () => openNewBookDialog());

submitAddBookButton.addEventListener("click", (event) => {
    event.preventDefault();

    let newBookTitle = document.querySelector("#newBookTitle").value;
    let newBookAuthor = document.querySelector("#newBookAuthor").value;
    let newBookPages = document.querySelector("#newBookPages").value;
    let newBookHasRead = document.querySelector("#newBookHasRead").checked;


    addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookHasRead);
    removeLibraryDisplay();
    displayLibrary();

    newBookDialog.close();
});