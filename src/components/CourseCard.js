import React from 'react';
import ProgressBar from './ProgressBar';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img 
        src={course.image} 
        alt={course.title}
        className="course-image"
      />
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        
        <div className="course-meta">
          <span>Instructor: {course.instructor}</span>
          <span>{course.duration}</span>
        </div>
        
        <div className="course-meta">
          <span>{course.lessons} lessons</span>
          <span>{course.progress}% complete</span>
        </div>
        
        <div className="course-progress">
          <ProgressBar progress={course.progress} />
        </div>
        
        <button className="btn" style={{marginTop: '1rem', width: '100%'}}>
          {course.progress === 0 ? 'Start Course' : 
           course.progress === 100 ? 'Completed' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;