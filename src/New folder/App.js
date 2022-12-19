import "./App.css";
import nameFormat from "../nameFormat";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import currentTime from "../clock";

let nameForm = "null yet";
let nameF = "null yet";
export const Clock = ()=>{
  currentTime()};
const pruchka=()=>{
  return <motion.h1
  initial={{x:-1000}}
  animate={{x:[20,50,0,-70.40] }}>
  🪄 asdsdasdasdasdAS ASDASDASD AS
  </motion.h1>
}
export const Apple = () => {
  const [clipboard, setClipboard] = useState("Nothing yet lol");
  nameF = useRef();
  const submit1 = (e) => {
    e.preventDefault();
    nameForm = nameFormat(nameF.current.value);
    setClipboard(`🪄 ${nameForm} `);
    // nameF.current.value = "";
  };
  
  return (
    <form className="Apple" 
    onChange={submit1}>
      <input ref={nameF} type="text" placeholder="04. Random Excercise" />
      <br></br>
      <h4>Paste excercise name in the field.</h4>
      <center>
        <section className="section"
    onSubmit={pruchka()}>
        <CopyToClipboard text={nameForm}>
          <motion.button
            whileHover={{ scale: 1.17, duration: 1 }}
            whileTap={{ scale: 0.6, duration: 0.4 }}
            class="button"
            >
            Copy
          </motion.button></CopyToClipboard>

          <br></br>
        </section>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextField
        id="filled-basic"
        label={clipboard}
        variant="filled"
        color="success"
        focused="true"
        multiline="false"
        />
    </form>
    // <center><div className="SideShit">
    
  //     </div></center> */}
  //     {/* );
  //   }
  //   export const SideShit=()=>{
    //     return ( )
  //   } */})
  );
};