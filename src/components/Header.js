import React, {useEffect, useState} from 'react';
import {ubb} from "../assets/Images";
import './Header.css'
import {BrowserRouter, Link} from "react-router-dom";
import SelectHeaderMenu from "./SelectHeaderMenu";
const Header = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.outerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <BrowserRouter basename="/AWD-website">
            <div className="headerStyle">
                <div>
                    <img src={ubb} alt="Logo" className="logoStyle" />
                </div>
                {!isMobile ?
                    <div className="greenHeader">
                        <ul className="ulStyle">
                            <li className="liStyle">
                                <Link to="/">HOME</Link>
                            </li>
                            <li className="liStyle">ABOUT ME</li>
                            <li className="liStyle">
                                <Link to="/teaching">TEACHING</Link>
                            </li>
                            <li className="liStyle">CONTACT</li>
                            <li className="liStyle">TIMETABLE</li>
                        </ul>
                    </div> :
                    <SelectHeaderMenu/>
                }
            </div>
            <main>{children}</main>
        </BrowserRouter>
    );
};

export default Header;

