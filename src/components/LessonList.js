import React from 'react';

const LessonList = ({ lessons = [] }) => {
  const sampleLessons = [
    { id: 1, title: 'Introduction to React', duration: '15 min', completed: true },
    { id: 2, title: 'JSX Syntax', duration: '20 min', completed: true },
    { id: 3, title: 'Components & Props', duration: '25 min', completed: false },
    { id: 4, title: 'State & Lifecycle', duration: '30 min', completed: false }
  ];

  const lessonsToShow = lessons.length > 0 ? lessons : sampleLessons;

  return (
    <div className="lesson-list">
      <h3>Course Lessons</h3>
      {lessonsToShow.map(lesson => (
        <div key={lesson.id} className="lesson-item">
          <div className="lesson-info">
            <span className={`lesson-status ${lesson.completed ? 'completed' : ''}`}>
              {lesson.completed ? '✓' : '○'}
            </span>
            <span className="lesson-title">{lesson.title}</span>
          </div>
          <span className="lesson-duration">{lesson.duration}</span>
        </div>
      ))}
    </div>
  );
};

export default LessonList;