import React from 'react';
import './App.css';
import CARDS from "./assets/cards.json";
import {CardViewer} from "./components/CardViewer";
import {ControlPanel} from "./components/ControlPanel";

function App(): JSX.Element {
  return (
    <div className="App">
      <CardViewer />
      <ControlPanel />
    </div>
  );
}

export default App;
