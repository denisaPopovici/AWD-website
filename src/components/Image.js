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
                    POPOVICI DENISA-MARIA
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
