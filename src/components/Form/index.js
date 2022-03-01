import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";

const classes = {
  paperClass: {
    maxWidth: '100%',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },
  inputClass: {
    minWidth: '40%',
  },
  selectClass: {
    minWidth: '180px'
  }
}

export const Form = ({onChange,formValues}) => {

  const handleChange = (e) => {
    onChange(e.target.name,e.target.value)
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
      <FormControl sx={classes.selectClass}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          value={formValues.gender}
          onChange={handleChange}
          label="Gender"
          size='small'
          name='gender'
        >
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={classes.selectClass}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          value={formValues.nation}
          onChange={handleChange}
          label="Nation"
          size='small'
          name='nation'
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {}
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
        </Select>
      </FormControl>
    </Paper>

  );
};

