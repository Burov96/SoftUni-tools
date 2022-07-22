import "./App.css";
import { useRef } from "react";
import spaceRemover from "../spaceRemover";
import nameFormat from "../nameFormat";
import { motion } from "framer-motion";
import background from "../giphy.gif"

export const bodyApp = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div>
  );
}

export const App2 = () => {
  const spaceR = useRef();
  const submit2 = (e) => {
    e.preventDefault();
    const SpaceRem = spaceRemover(spaceR.current.value);
    alert(SpaceRem)
  }
  return (
    <form className="App2" onSubmit={submit2}>
      <input ref={spaceR} type="text" placeholder="Space remover" /> <br></br>
      <br></br><br></br>
      <motion.button 
      whileHover={{ scale: 1.17, duration:1}}
      whileTap={{ scale: 0.6,duration:0.4 }}
      class="button">Submit</motion.button>
    </form>
  );
}

export const Apple = () => {
  const nameF = useRef();
  const submit1 = (e) => {
    e.preventDefault();
    const nameForm = nameFormat(nameF.current.value); 
    alert(nameForm)
  };
  return (
    <form className="Apple" onSubmit={submit1}>
      <input ref={nameF} type="text" placeholder="Name Format" />
      <br></br>
      <br></br>
      <br></br>
      <motion.button 
      whileHover={{ scale: 1.17, duration:1}}
      whileTap={{ scale: 0.6,duration:0.4 }}
      class="button">Submit</motion.button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>{" "}
    </form>
  );
}