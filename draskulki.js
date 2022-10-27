import "./App.css";
import { useRef } from "react";
import spaceRemover from "../spaceRemover";
import nameFormat from "../nameFormat";
import { motion } from "framer-motion";
import background from "../giphy.gif"
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, {useState} from "react";
let nameForm=""
export const Apple = () => {
  const nameF = useRef();
  const submit1 = (e) => {
    e.preventDefault();
    nameForm = nameFormat(nameF.current.value); 
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
    export const App = () => {  
    const [value, setValue] = React.useState('Cukni butona otnovo\nmamka mu');
    const [copied, setCopied] = React.useState(false);
    const onCopy = React.useCallback(() => {
      setCopied(true);
    }, [])
    
    return (
      <div className="app">
        <center>
        <section className="section">
          <CopyToClipboard onCopy={onCopy} text={nameForm}>
            <button>Now copy...</button>
          </CopyToClipboard>
        </section>
        </center>
      </div>
    );
    }