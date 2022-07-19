import "./App.css";
import { useState,useReducer } from "react";

function App() {
  const [checked, setChecked] = useState (false);
  return (
    <div className="AppT">
      <input type='checkbox'value={checked} onChange = {() =>setChecked ((checked) => !checked)}/>
      <label>{checked? "✅" : "❌"}</label>
    </div>
  );
}

export default App;
