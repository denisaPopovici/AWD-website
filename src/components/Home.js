import React, {useEffect} from "react";
import ImageComponent from "./Image";
import FourTexts from "./FourTexts";
import './Home.css'

const Home = () => {
    useEffect(() => {
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

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