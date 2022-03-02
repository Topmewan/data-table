import React, {useState} from 'react';
import useContacts from "../../hooks/useContacts";
import Grid from '@mui/material/Grid';
import {Container, Typography} from "@mui/material";
import {ContactTable} from "../../components/ContactTable";
import {Form} from "../../components/Form";
import {Loader} from '../../components/Loader/index';
import {NATIONALITIES_HUMAN_NAME} from "../../constants/nationals";

const classes = {
  containerStyles: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  headContainer: {
    marginBottom: '24px'
  },
}

const defaultValue = {
  fullName: '',
  gender: 'all',
  nationality: 'all'
}

const filterByName = ({first, last}, fullName) => {
  return first?.toLowerCase().includes(fullName.toLowerCase()) ||
    last?.toLowerCase().includes(fullName.toLowerCase())
}

const filterByGender = (gender, selectGender) => {
  if (selectGender === 'all') return true;
  return gender === selectGender
};

const filterByNation = (nationality, filterNationality) => {
  if (filterNationality === 'all') return true;
  return NATIONALITIES_HUMAN_NAME[nationality] === filterNationality
}


export const Contacts = () => {

  const {data: users, isLoading, isError} = useContacts('https://randomuser.me/api/?results=200');

  const [formValues, setFormValues] = useState(defaultValue);

  const filteredUsers = users
    .filter((user) => filterByName(user.name, formValues.fullName))
    .filter((user) => filterByGender(user.gender, formValues.gender))
    .filter((user) => filterByNation(user.nat, formValues.nationality));

  const handleChangeForm = (name, value) => {
    setFormValues((prev) => ({...prev, [name]: value}));
  }


  const resetFilters = () => {
    setFormValues(defaultValue)
  }

  const dataOrNot = () => {
    if (isLoading) {
      return <Loader/>
    }
    if (isError) {
      return <h1>Error</h1>
    }
    return <ContactTable data={filteredUsers}/>
  }

  return (
    <Container maxWidth='xl' sx={classes.containerStyles}>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={classes.headContainer}>
          <Typography variant='h3' component='h3'>
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Form
            onChange={handleChangeForm}
            formValues={formValues}
            reset={resetFilters}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12}>
          {dataOrNot()}
        </Grid>
      </Grid>
    </Container>
  );
};

