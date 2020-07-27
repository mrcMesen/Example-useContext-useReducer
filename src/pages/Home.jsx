import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { CountRegisters } from '../components/CountRegisters';
import { RegisterList } from '../components/RegisterList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hr: {
    width: '100%',
  },
  button: {
    margin: 50,
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.root}>
      <Divider className={classes.hr} />
      <CountRegisters />
      <Fab variant='extended' component={Link} to='/register' className={classes.button}>
        <AddIcon className={classes.extendedIcon} />
        Add
      </Fab>
      <Divider className={classes.hr} />
      <RegisterList />
    </Container>
  );
};
