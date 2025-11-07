import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ user }) => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">LearnHub</div>
        
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/courses" 
              className={location.pathname === '/courses' ? 'active' : ''}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={location.pathname === '/profile' ? 'active' : ''}
            >
              Profile
            </Link>
          </li>
        </ul>
        
        <div className="user-info">
          <div className="user-avatar">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <span>Hello, {user.name.split(' ')[0]}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;