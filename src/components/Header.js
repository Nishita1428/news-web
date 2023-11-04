import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/world">World</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;

