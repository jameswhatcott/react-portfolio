export default function Portfolio() {
  
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div id="app-1">
                <a href="#app-1"><h3>What's My Sky?</h3></a>
                <a href="https://jameswhatcott.github.io/constellation-weather-app/"><img src={require("../Assets/constellation-weather pic.jpeg").default} alt="Constellation Weather App"/></a>
            </div>
            <div id="app-2">
                <a href="#app-2"><h3>Weather App</h3></a>
                <a href="https://jameswhatcott.github.io/weather-app/"><img src={require("../Assets/weather app pic.png").default} alt="Weather App"/></a>
            </div>
            <div id="app-3">
                <a href="#app-3"><h3>Task Manager</h3></a>
                <a href="https://jameswhatcott.github.io/task-manager/"><img src={require("../Assets/Task manager pic.png").default} alt="Task Manager"/></a>
            </div>
        </section>
    );
}