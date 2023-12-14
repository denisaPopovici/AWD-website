import React from 'react';
import {profile} from "../assets/Images";
import './Image.css'

const ImageComponent = () => {
    return (
        <div className="mainImageContainer">
            <div className="imageContainer">
                <img
                    src={profile}
                    className="profileImage"
                    alt={"profileImage"}/>
                <div className="nameText">
                    <h4> POPOVICI DENISA-MARIA </h4>
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
