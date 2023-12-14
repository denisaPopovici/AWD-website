import React from 'react';
import Subject from './Subject';
import './SubjectsPage.css';

const subjectsData = [
    {
        title: 'Object Oriented Principles',
        description: 'Main theoretical principles of object-oriented programming in Java programming language.',
        Teams: 'HBD68J0',
    },
    {
        title: 'Web Development',
        description: 'HTML, CSS, JavaScript. Front-end development frameworks such as Bootstrap. Building websites from scratch.',
        Teams: '99NDS8G',
    },
    {
        title: 'Data structures and algorithms',
        description: 'Methods of organizing data in a virtual system. Collections of steps needed to solve particular problems.',
        Teams: 'KLJU4DF1',
    },
];

const SubjectsPage = () => {
    return (
        <div className="subjects-container">
            <h2 className="main-text"><u>Subjects taught this semester</u></h2>
            <div className="subjects-list">
                {subjectsData.map((subject, index) => (
                    <Subject key={index} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default SubjectsPage;
