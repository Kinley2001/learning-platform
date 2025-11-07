import React from 'react';
import ProgressBar from '../components/ProgressBar';

const Profile = ({ user }) => {
  const stats = [
    { label: 'Courses Enrolled', value: '12' },
    { label: 'Courses Completed', value: '8' },
    { label: 'Learning Hours', value: '46' },
    { label: 'Current Streak', value: '7 days' }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>Member since January 2024</p>
        </div>
      </div>

      <section>
        <h3>Overall Progress</h3>
        <div style={{marginTop: '1rem'}}>
          <div className="progress-text">
            <span>Learning Progress</span>
            <span>{user.progress}%</span>
          </div>
          <ProgressBar progress={user.progress} />
        </div>
      </section>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <section style={{marginTop: '3rem'}}>
        <h3>Recent Activity</h3>
        <div style={{marginTop: '1rem'}}>
          <div className="activity-item" style={{
            padding: '1rem',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <strong>Completed:</strong> React Fundamentals - Final Project
          </div>
          <div className="activity-item" style={{
            padding: '1rem',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <strong>Started:</strong> JavaScript Advanced Course
          </div>
          <div className="activity-item" style={{
            padding: '1rem',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <strong>Earned:</strong> CSS Mastery Badge
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;