import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Home = ({ user, courses }) => {
  const inProgressCourses = courses.filter(course => course.progress > 0 && course.progress < 100);
  const completedCourses = courses.filter(course => course.progress === 100);

  return (
    <div>
      <section className="hero">
        <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
        <p>Continue your learning journey and discover new skills</p>
        <Link to="/courses" className="btn" style={{marginTop: '2rem'}}>
          Browse All Courses
        </Link>
      </section>

      {inProgressCourses.length > 0 && (
        <section>
          <h2>Continue Learning</h2>
          <div className="course-grid">
            {inProgressCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      <section style={{marginTop: '3rem'}}>
        <h2>Recommended Courses</h2>
        <div className="course-grid">
          {courses.slice(0, 2).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {completedCourses.length > 0 && (
        <section style={{marginTop: '3rem'}}>
          <h2>Completed Courses</h2>
          <div className="course-grid">
            {completedCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;