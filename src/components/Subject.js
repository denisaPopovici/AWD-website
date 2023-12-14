import React from 'react';
import './Subject.css';

const Subject = ({ subject }) => {
    return (
        <div className="subject-box">
            <h3 className="subject-title">{subject.title}</h3>
            <p>{subject.description}</p>
            <p>
                <b>Microsoft Teams:</b>
                {subject.Teams}
            </p>
        </div>
    );
};

export default Subject;
