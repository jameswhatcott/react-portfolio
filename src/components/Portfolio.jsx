import React from 'react';


export default function Portfolio() {
  
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div id="app-0" class="app">
                <h3>Social Network API (MongoDB)</h3>
                <a href="https://social-network-api-ayyn.onrender.com/"><img src='/images/socialmediaapi.png' alt="Social Network API"/></a>
            </div>
          <div id="app-1" class="app">
                <h3>Todo API (Spring Boot)</h3>
                <a href="https://todo-api-fy9m.onrender.com/"><img src='/images/todo-api.png' alt="todo-api"/></a>
            </div>
            <div id="app-2" class="app">
                <h3>Continue</h3>
                <a href="https://continue-4su3.onrender.com/"><img src='/images/games page.png' alt="Continue"/></a>
            </div>
            <div id="app-3" class="app">
                <h3>What's My Sky?</h3>
                <a href="https://jameswhatcott.github.io/constellation-weather-app/"><img src='/images/constellation-weather pic.jpeg' alt="Constellation Weather App"/></a>
            </div>
            <div id="app-4" class="app">
                <h3>Weather App</h3>
                <a href="https://jameswhatcott.github.io/weather-app/"><img src='/images/weather app pic.png' alt="Weather App"/></a>
            </div>
            <div id="app-5" class="app">
                <h3>Task Manager</h3>
                <a href="https://jameswhatcott.github.io/task-manager/"><img src='/images/Task manager pic.png' alt="Task Manager"/></a>
            </div>
        </section>
    );
}
