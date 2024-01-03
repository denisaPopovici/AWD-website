import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1>Contact Information</h1>
            <p>If you have any questions or need assistance, feel free to contact me:</p>

            <ul className="contact-ul">
                <li className="contact-li">Email: denisa.popovici@ubbcluj.ro</li>
                <li className="contact-li">Phone: (123) 456-7890</li>
            </ul>

            <p>Alternatively, you can fill out the form below:</p>

            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;
