import React from 'react';
import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";

const classes = {
  paperClass: {
    maxWidth: '100%',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px'
  },
  inputClass: {
    width: '70%'

  },
  selectClass: {}
}
export const Form = () => {

  return (
    <Paper sx={classes.paperClass} component='form'>
      <TextField
        label="Outlined"
        sx={classes.inputClass}
        />
    </Paper>
  );
};

