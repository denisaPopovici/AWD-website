import React from 'react';
import './AboutMePage.css';
import {profile} from "../assets/Images";

const AboutMePage = () => {
    return (
        <div className="about-container">
            <div className="profile-section">
                <img
                    src={profile}
                    alt="Profile"
                    className="profile-picture"
                />
                <div className="profile-details">
                    <h2>Dr. Denisa-Maria Popovici</h2>
                    <p>Software Engineering Assistant Professor</p>
                </div>
            </div>

            <div className="bio-section">
                <h3>About Me</h3>
                <p>
                    Welcome to my website! I am a dedicated software engineering assistant professor with a passion
                    for educating and inspiring students in the field of software development. With years of
                    experience in teaching and industry, I bring practical insights to the classroom,
                    emphasizing hands-on learning and real-world applications.
                </p>

                <p>
                    My areas of expertise include software design, development methodologies, and software
                    architecture. I am committed to fostering a collaborative and inclusive learning
                    environment where students can explore and excel in the exciting world of software
                    engineering.
                </p>

                <p>
                    Feel free to explore the courses I teach, consult this year's timetable and don't hesitate to
                    contact me if you have any questions or need assistance. I look forward to helping you
                    succeed on your software engineering journey!
                </p>

                <div className="education-section">
                    <h3>Education</h3>
                    <ul>
                        <li>Ph.D. in Computer Science - Babeș-Bolyai University (2025)</li>
                        <li>Master's in Software Engineering - Babeș-Bolyai University (2023)</li>
                        <li>Bachelor's in Computer Science - Babeș-Bolyai University (2021)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;
