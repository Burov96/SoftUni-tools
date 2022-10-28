import "./App.css";
import { useRef } from "react";
import nameFormat from "../nameFormat";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, {useState} from "react";
import TextField from '@mui/material/TextField';

let nameForm=""
let nameF=""
let submitted=false ;
export const Apple = () => {
  const [clipboard,setClipboard]=useState("Nothing yet lol");
  const [copied, setCopied] = React.useState(false);
  const onCopy = React.useCallback(() => {
    setCopied(true);
  }, [])
  nameF = useRef();
  const submit1 = (e) => {
    e.preventDefault();
    nameForm = nameFormat(nameF.current.value); 
    onCopy();
  };
  return (
    <form className="Apple" onSubmit={submit1}>
      <input ref={nameF} type="text" placeholder="Name Format" />
      <br></br>
      <br></br>
      <br></br>
           <center>
        <section className="section">
          <motion.button 
      whileHover={{ scale: 1.17, duration:1}}
      whileTap={{ scale: 0.6,duration:0.4 }}
      class="button">Submit</motion.button>
            <br></br>
        </section>
        </center>
        <br></br>
        <br></br>
        <CopyToClipboard onCopy={onCopy} text={nameForm}><button className=".button" onClick={()=>setClipboard(`Copied ${nameForm} 😋`)}>Click me and paste as name in VScode🤖</button></CopyToClipboard>
        <br></br>
        <br></br>
        <br></br>
        Reset page to use again c(:
        <br></br>
        <br></br>
              <TextField id="filled-basic" label={clipboard} variant="filled" color="success" focused rows="maxRows"/>
    </form>
    // <center><div className="SideShit">

    //     </div></center> */}
    //     {/* );
    //   }
    //   export const SideShit=()=>{
    //     return ( )
    //   } */})
  )}