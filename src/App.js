import "./App.css";
import { useRef } from "react";
import spaceRemover from "./spaceRemover";

export function App2() {
  const spaceR = useRef();
  const submit2 = (e) => {
    e.preventDefault();
    const SpaceRem = spaceR.current.value;
    alert(`${SpaceRem}`);
  };
  return (
    <form className="App2" onSubmit={submit2}>
      <input ref={spaceR} type="text" placeholder="Space remover" /> <br></br>
      <br></br>
      <button>Submit</button>
    </form>
  );
}

// export function App1() {
//   const nameF = useRef();
//   const submit1 = (e) => {
//     e.preventDefault();
//     const nameForm = nameF.current.value; 
//     alert(`${spaceRemover()}`);
//   };
//   return (
//     <form className="App1" onSubmit={submit1}>
//       <input ref={nameF} type="text" placeholder="Name Format" />
//       <br></br>
//       <br></br>
//       <button>Submit</button>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>{" "}
//     </form>
//   );
// }