import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = ({ courses }) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <h1>All Courses</h1>
        <div style={{display: 'flex', gap: '1rem'}}>
          <input 
            type="text" 
            placeholder="Search courses..." 
            style={{
              padding: '0.75rem',
              border: '1px solid #e2e8f0',
              borderRadius: '5px',
              minWidth: '300px'
            }}
          />
          <select style={{padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '5px'}}>
            <option>All Categories</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full Stack</option>
          </select>
        </div>
      </div>
      
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;