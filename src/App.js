import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookManagement from './components/Books/BookManagement';
import AuthorManagement from './components/Authors/AuthorManagement';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Library Management Dashboard</h1>
        
        {/* Navigation links */}
        <nav>
          <ul className="nav nav-pills mb-3">
            <li className="nav-item">
              <Link to="/books" className="nav-link">Manage Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/authors" className="nav-link">Manage Authors</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/books" element={<BookManagement />} />
          <Route path="/authors" element={<AuthorManagement />} />
          <Route path="/" element={<h2>Select a module from the navigation above.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
