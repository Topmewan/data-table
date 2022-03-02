import PropTypes from "prop-types";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField
} from "@mui/material";
import {NATIONALITIES_HUMAN_NAME} from "../../constants/nationals";

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
    minWidth: '180px',
  }
}

export const Form = ({onChange, formValues, reset,isLoading}) => {


  const handleChange = (e) => {
    onChange(e.target.name, e.target.value)
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
        disabled={isLoading}
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
          disabled={isLoading}

        >
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={classes.selectClass}>
        <InputLabel id="nation">Nation</InputLabel>
        <Select
          labelId="nation"
          value={formValues.nationality}
          onChange={handleChange}
          label="Nation"
          size='small'
          name='nationality'
          sx={{scrollbarWidth: 'none'}}
          disabled={isLoading}

        >
          <MenuItem value='all'>
            <em>All</em>
          </MenuItem>
          {Object.entries(NATIONALITIES_HUMAN_NAME).map(([key, value]) => (
            <MenuItem key={key} value={value}>{value}</MenuItem>
          ))
          }
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={reset}
        sx={{minWidth: '150px'}}
        size='small'
        disabled={isLoading}
      >
        Очистка фильтров
      </Button>
    </Paper>
  );
};

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired
}

