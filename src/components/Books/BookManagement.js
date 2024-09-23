import React, { useState } from 'react';
import BookForm from './BookForm';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const handleEditBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  return (
    <div>
      <h2>Book Management</h2>
      <BookForm
        initialValues={editingBook || { title: '', author: '', ISBN: '', publicationDate: '' }}
        onSubmit={editingBook ? handleEditBook : handleAddBook}
      />
      <ul className="list-group mt-4">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            {book.title} by {book.author} (ISBN: {book.ISBN})
            <button className="btn btn-warning btn-sm mx-2" onClick={() => setEditingBook(book)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManagement;
