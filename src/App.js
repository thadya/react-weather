import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>WEATHER APP</h2>
        <Weather defaultCity="London" />
        <footer>
        <a
  href="https://github.com/thadya/weather-app/tree/master"
target="_blank"
rel="noreferrer"
>Open-source code </a>
by Thato Gumbo and hosted on
<a href="https://clever-squirrel-4083ed.netlify.app/"> netlify</a>
        </footer>
      </div>
    </div>
  );
}