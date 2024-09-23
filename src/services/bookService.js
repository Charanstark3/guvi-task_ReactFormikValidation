// Simulating a database with a local array for book records
let books = [
    { id: 1, title: '1984', author: 'George Orwell', ISBN: '0451524934', publicationDate: '1949-06-08' },
    { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen', ISBN: '0486284735', publicationDate: '1813-01-28' },
  ];
  
  // Function to fetch all books
  export const getBooks = () => {
    return books;
  };
  
  // Function to add a new book
  export const addBook = (book) => {
    const newBook = { ...book, id: books.length + 1 };
    books.push(newBook);
    return newBook;
  };
  
  // Function to update an existing book
  export const updateBook = (updatedBook) => {
    const index = books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      books[index] = updatedBook;
    }
    return updatedBook;
  };
  
  // Function to delete a book by ID
  export const deleteBook = (bookId) => {
    books = books.filter((book) => book.id !== bookId);
  };
  