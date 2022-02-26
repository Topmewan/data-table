import React from 'react';
import useContacts from "../../hooks/useContacts";
import Grid from '@mui/material/Grid';
import {Container, createTheme, Paper, ThemeProvider, Typography} from "@mui/material";
import {ContactTable} from "../../components/ContactTable";
import {Form} from "../../components/Form";

export const Contacts = () => {
  const {data: users, isLoading, isError} = useContacts('https://randomuser.me/api/?results=10');

  const theme = createTheme({
    spacing: 8
  });

  const classes = {
    containerStyles: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3)
    },
  }



  const dataOrNot = () => {
    if (isLoading) {
      return <h1>Loading...</h1>
    }
    if (isError) {
      return <h1>Error</h1>
    }
    return <ContactTable data={users}/>
  }


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={classes.containerStyles}>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={classes.headContainer}>
            <Typography variant='h3' component='h3'>
              Contacts
            </Typography>
            <Form/>
          </Grid>
          <Grid item xs={12}>
            {dataOrNot()}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

