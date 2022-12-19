import { Apple , useState} from "./App";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TextField from '@mui/material/TextField';
import nameForm from "../nameFormat";
import { useEffect } from "react";
import Box from '@mui/material/Box';

export const PopUps = () => {
    const fnName = {nameForm}.slice(0,-3)
    return (
        <div>
            <h1>{"fnName"}</h1>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
            </Box>
        </div>
    
)}