import React from 'react';
import './Header.css'
import {useNavigate} from "react-router-dom";
const SelectHeaderMenu = () => {

    const navigate = useNavigate();

    const handleOptionClick = (event) => {
        let selectedValue = event.target.value.toString().toLowerCase();
        let undefinedValues = ['home', 'about me', 'contact', 'timetable']
        if (undefinedValues.includes(selectedValue)) {
            selectedValue = '';
        }
        navigate(`/${selectedValue}`);
    };

    return (
        <select className="selectStyle" onChange={handleOptionClick}>
            <option>HOME</option>
            <option>ABOUT ME</option>
            <option>TEACHING</option>
            <option>CONTACT</option>
            <option>TIMETABLE</option>
        </select>
    );
};

export default SelectHeaderMenu;

