import React, {useEffect, useState} from 'react';
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
    width: '30%',


  },
  selectClass: {}
}

export const Form = ({formValues,setFormValues}) => {

  const handleChange = (e) => {
    setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}));
  }


  return (
    <Paper sx={classes.paperClass} component='form'>
      <TextField
        label="Name"
        size='small'
        sx={classes.inputClass}
        value={formValues.fullName}
        onChange={handleChange}
        name='fullName'
      />
    </Paper>
  );
};

