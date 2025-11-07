import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import './styles/App.css';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    progress: 65
  });

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Learn the basics of React programming',
      instructor: 'Jane Smith',
      duration: '8 hours',
      progress: 75,
      lessons: 12,
      image: 'https://via.placeholder.com/300x200/4f46e5/ffffff?text=React'
    },
    {
      id: 2,
      title: 'JavaScript Advanced',
      description: 'Deep dive into advanced JavaScript concepts',
      instructor: 'Mike Johnson',
      duration: '10 hours',
      progress: 40,
      lessons: 15,
      image: 'https://via.placeholder.com/300x200/059669/ffffff?text=JavaScript'
    },
    {
      id: 3,
      title: 'CSS Mastery',
      description: 'Master modern CSS techniques and frameworks',
      instructor: 'Sarah Wilson',
      duration: '6 hours',
      progress: 20,
      lessons: 8,
      image: 'https://via.placeholder.com/300x200/dc2626/ffffff?text=CSS'
    }
  ]);

  return (
    <div className="App">
      <Header user={user} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home user={user} courses={courses} />} />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;