import "./App.css";
import { useState, useEffect, useReducer } from "react";

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secEmot, setSec] = useState("Tired");
  useEffect(() => {
    console.log(`it is ${emotion} right now.`);
  }, [emotion]);
  useEffect (() => {
    console.log(
      `osven tva sum i ${secEmot}.`)}
    ,[secEmot])
  return (
    <div className="AppT">
      <h1>V momenta sum : {emotion}</h1>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Cool")}>Cool</button>
      <h1>I v sushtoto vreme sum : {secEmot}</h1>
      <button onClick={() => setSec("HYPED")}>HYPED</button>
      <button onClick={() => setSec("Chillax'")}>Chillax'</button>
    </div>
  );
}

export default App;
