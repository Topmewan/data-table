import React, {useCallback, useEffect, useState} from 'react';
import useContacts from "../../hooks/useContacts";
import Grid from '@mui/material/Grid';
import {Container, createTheme, Paper, ThemeProvider, Typography} from "@mui/material";
import {ContactTable} from "../../components/ContactTable";
import {Form} from "../../components/Form";
import {Loader} from '../../components/Loader/index';

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
  fullName: ''
}

const filterByName = ({first, last}, fullname) => {
  return first?.toLowerCase().includes(fullname.toLowerCase()) ||
    last?.toLowerCase().includes(fullname.toLowerCase())
}

export const Contacts = () => {

  const {data: users, isLoading, isError} = useContacts('https://randomuser.me/api/?results=10');

  const [formValues, setFormValues] = useState(defaultValue);

  const newArr = users.filter((elem) => filterByName(elem.name, formValues.fullName));

  const dataOrNot = () => {
    if (isLoading) {
      return <Loader/>
    }
    if (isError) {
      return <h1>Error</h1>
    }
    return <ContactTable data={newArr}/>
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
          <Form setFormValues={setFormValues} formValues={formValues}/>
        </Grid>
        <Grid item xs={12}>
          {dataOrNot()}
        </Grid>
      </Grid>
    </Container>
  );
};

