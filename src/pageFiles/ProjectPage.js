import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles.css";

export default function ProjectPage() {
    const nav = useNavigate();

    const aboutClick = () => {
        nav('./');
    };

    const projectsClick = () => {
        nav('./projects');
    };

    return (
        <div className = "page-background">
            <div className = "page-buttons">
                <button className="button" onClick={aboutClick}>About</button>
                <button className="button" onClick={projectsClick}>Projects</button>
            </div>
            <hr class = "line"/>
            <div>
                <p>
                    These are my projects:
                </p>
            </div>
        </div>
    );
}