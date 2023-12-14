import React from "react";
import ImageComponent from "./Image";
import FourTexts from "./FourTexts";
import './Home.css'

const Home = () => {

    return (
        <div>
            <div className="homeContainer">
                <ImageComponent/>
                <FourTexts/>
            </div>
        </div>
    );
};

export default Home;