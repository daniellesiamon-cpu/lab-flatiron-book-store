const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}
// === Step 2: Manipulating Existing Elements ===

// Select the DOM element with the id of 'header'
const bookStoreTitle = document.getElementById('header');

// Change the textContent to match the bookstore name property
bookStoreTitle.textContent = bookStore.name;


// === Step 3: Book Elements ===

// Select the existing parent list element (usually an <ul> or <ol> with id 'book-list' or similar)
// Note: Ensure 'bookList' matches the exact ID or variable name provided in your HTML/starter code
const bookList = document.getElementById('book-list') || document.querySelector('#book-list');

// Loop through every book element in the bookStore.books array
bookStore.booksforEach(book => {
    
    // 1. Create elements for each book
    const bookContainer = document.createElement('li');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    // 2. Change the textContent/src of each element to match the book object
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.image; // sets the image URL
    bookImage.alt = book.title; // Good practice: adds alt text for accessibility

    // 3. Append book elements to bookContainer
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // 4. Append bookContainer element to bookList
    bookList.appendChild(bookContainer);
});

