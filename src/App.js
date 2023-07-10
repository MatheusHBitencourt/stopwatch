import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

const App = () => {
  const [segundo, setSegundo] = useState(null);
  const [minuto, setMinuto] = useState(null);
  const [hora, setHora] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isStart, setIsStart] = useState(true);

  function showTimer() {
    if (segundo !== null) {
      setTimeout(startTimer, 1000);
    }

    const horario = [segundo, minuto, hora];

    return horario;
  }

  function startTimer() {
    setIsEnabled(false);
    setIsStart(false);

    if (!isPaused) {
      if (segundo !== null) {
        setSegundo(segundo + 1);
      } else {
        setSegundo(0);
      }
      if (segundo > 58) {
        setMinuto(minuto + 1);
        setSegundo(0);
      }
      if (minuto > 58) {
        setHora(hora + 1);
        setMinuto(0);
      }
    }
  }

  function pauseTimer() {
    setIsPaused(true);
  }

  function resumeTimer() {
    setIsPaused(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {showTimer()[2] < 10
            ? `0${showTimer()[2] !== null ? showTimer()[2] : `0`}`
            : showTimer()[2]}
          :
          {showTimer()[1] < 10
            ? `0${showTimer()[1] !== null ? showTimer()[1] : `0`}`
            : showTimer()[1]}
          :
          {showTimer()[0] < 10
            ? `0${showTimer()[0] !== null ? showTimer()[0] : `0`}`
            : showTimer()[0]}
        </p>
        {!isPaused && isStart && (
          <button onClick={startTimer} disabled={!isEnabled}>
            Iniciar
          </button>
        )}
        {!isPaused && !isStart && <button onClick={pauseTimer}>Pausar</button>}
        {isPaused && <button onClick={resumeTimer}>Retomar</button>}
      </header>
    </div>
  );
};

export default App;
