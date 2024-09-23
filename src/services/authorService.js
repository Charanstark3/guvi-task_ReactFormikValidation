// Simulating a database with a local array for author records
let authors = [
    { id: 1, name: 'George Orwell', birthDate: '1903-06-25', biography: 'Author of 1984 and Animal Farm.' },
    { id: 2, name: 'Jane Austen', birthDate: '1775-12-16', biography: 'Author of Pride and Prejudice.' },
  ];
  
  // Function to fetch all authors
  export const getAuthors = () => {
    return authors;
  };
  
  // Function to add a new author
  export const addAuthor = (author) => {
    const newAuthor = { ...author, id: authors.length + 1 };
    authors.push(newAuthor);
    return newAuthor;
  };
  
  // Function to update an existing author
  export const updateAuthor = (updatedAuthor) => {
    const index = authors.findIndex((author) => author.id === updatedAuthor.id);
    if (index !== -1) {
      authors[index] = updatedAuthor;
    }
    return updatedAuthor;
  };
  
  // Function to delete an author by ID
  export const deleteAuthor = (authorId) => {
    authors = authors.filter((author) => author.id !== authorId);
  };
  