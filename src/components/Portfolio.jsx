import React from 'react';
import Tilt from 'react-parallax-tilt';

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div id="app-0">
                <a href="#app-0"><h3>Continue</h3></a>
                <Tilt className="Tilt" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                    <a href="https://github.com/jameswhatcott/continue">
                        <img src='/images/games page.png' alt="Continue"/>
                    </a>
                </Tilt>
            </div>
            <div id="app-1">
                <a href="#app-1"><h3>What's My Sky?</h3></a>
                <Tilt className="Tilt" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                    <a href="https://jameswhatcott.github.io/constellation-weather-app/">
                        <img src='/images/constellation-weather pic.jpeg' alt="Constellation Weather App"/>
                    </a>
                </Tilt>
            </div>
            <div id="app-2">
                <a href="#app-2"><h3>Weather App</h3></a>
                <Tilt className="Tilt" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                    <a href="https://jameswhatcott.github.io/weather-app/">
                        <img src='/images/weather app pic.png' alt="Weather App"/>
                    </a>
                </Tilt>
            </div>
            <div id="app-3">
                <a href="#app-3"><h3>Task Manager</h3></a>
                <Tilt className="Tilt" tiltMaxAngleX={25} tiltMaxAngleY={25}>
                    <a href="https://jameswhatcott.github.io/task-manager/">
                        <img src='/images/Task manager pic.png' alt="Task Manager"/>
                    </a>
                </Tilt>
            </div>
        </section>
    );
}

export default Portfolio;