import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles.css";
import headshot from "./Headshot.png";

export default function MainPage() {
    const nav = useNavigate();

    const aboutClick = () => {
        nav('/');
    };

    const projectsClick = () => {
        nav('/projects');
    };

    return (
        <div className = "page-background">
            <div className = "page-buttons">
                <button className="button" onClick={aboutClick}>About</button>
                <button className="button" onClick={projectsClick}>Projects</button>
            </div>
            <hr className = "line"/>
            <div className = "bio-container">
                <div className = "bio">
                    <p className = "title">
                        Joshua Taylor
                    </p>
                    <p className = "text">
                        MS Student @ University at Buffalo (UB)<br />
                        Expected to graduate May, 2026<br /><br />
                        I’m a computer science student focusing on AI related courses such as machine learning. I’ve learned the basics including the math behind many machine learning algorithms, and now I am delving into the deeper subtopics of the field including deep learning, pattern recognition, and vision/image processing.<br /><br />
                        I’ve completed some small projects in my courses at UB, including creating simple machine learning models, web design, and algorithm design. I also worked as a TA for an algorithms course for a semester. I’ve begun to work on my own personal projects as well and will update this site periodically with their progress.<br />
                    </p>
                </div>
                <img src={headshot} alt="Joshua Taylor" className="bio-image" />
            </div>
        </div>
    );
}