import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles.css";

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
                <div className = "projects">
                    <p className = "title">
                        Project 1:
                    </p>
                    <p className = "text">
                        Description that could be insanely incredibly long and go on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on for a while lol
                    </p>
                </div>
            </div>
        </div>
    );
}