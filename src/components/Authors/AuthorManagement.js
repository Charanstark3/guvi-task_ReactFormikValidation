import React, { useState } from 'react';
import AuthorForm from './AuthorForm';
import { getAuthors, addAuthor, updateAuthor, deleteAuthor } from '../../services/authorService';

const AuthorManagement = () => {
  const [authors, setAuthors] = useState(getAuthors());
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddAuthor = (author) => {
    const newAuthor = addAuthor(author);
    setAuthors([...authors, newAuthor]);
  };

  const handleEditAuthor = (updatedAuthor) => {
    const editedAuthor = updateAuthor(updatedAuthor);
    setAuthors(authors.map(author => (author.id === editedAuthor.id ? editedAuthor : author)));
    setEditingAuthor(null);
  };

  const handleDeleteAuthor = (authorId) => {
    deleteAuthor(authorId);
    setAuthors(authors.filter(author => author.id !== authorId));
  };

  return (
    <div>
      <h2>Author Management</h2>
      <AuthorForm
        initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
        onSubmit={editingAuthor ? handleEditAuthor : handleAddAuthor}
      />
      <ul className="list-group mt-4">
        {authors.map((author) => (
          <li key={author.id} className="list-group-item">
            {author.name} (Born: {author.birthDate})
            <button
              className="btn btn-warning btn-sm mx-2"
              onClick={() => setEditingAuthor(author)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteAuthor(author.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorManagement;
